import { message } from "antd"
import { useContext, useEffect, useState } from "react"
import { LoadContext } from "../context/loadContext"
import { CourseContext } from '../context/courseContext'
import { enrollStudentToCourse } from "../utils/api/courses"
import { allStudents } from "../utils/api/students"
import { removeModal } from "../utils/helper"

const StudentCourseModal = () => {

    const { refreshData, set_refreshData } = useContext(LoadContext)
    const { currentCourse } = useContext(CourseContext)
    const [ loading, setLoading ] = useState(false)
    const [ students, setStudents ] = useState([])
    const [student_id, setStudentID] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            removeModal('studentCourseModal')
            await enrollStudentToCourse(currentCourse.id, student_id)
            set_refreshData(!refreshData)
            message.success(`Student Enrolled successfully`)
        } catch (err) {
            message.error(err.message)
        }
    }

    const getStudents = async () => {
        setLoading(true)
        try {
            const res = await allStudents()
            setStudents(res.data)
            setLoading(false)
        } catch (err) {
            setLoading(false)
            console.log(err)
        }
    }

    useEffect(() => {
        getStudents()
    }, [refreshData])

    return (
        <div class="modal fade" role="dialog" tabIndex="-1" id="studentCourseModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Enroll Student to { currentCourse.title} </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        { loading && <p>...loading</p> }
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <select onChange={e => setStudentID(e.target.value)} class="form-control">
                                    <option>Select Student to Enroll</option>
                                    {
                                        students && students.map(stud => (
                                            <option value={stud.id} key={stud.id}>
                                                {`${stud.firstname} ${stud.other_names} ${stud.lastname}`}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-sm btn-light" type="button" data-dismiss="modal">Close</button>
                                <button class="btn btn-sm btn-primary" type="submit">Enroll Student</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCourseModal