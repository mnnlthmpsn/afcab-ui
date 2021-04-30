import { message } from "antd"
import { useContext, useEffect, useState } from "react"
import { CourseContext } from "../context/courseContext"
import { LoadContext } from "../context/loadContext"
import { addCourse, updateCourse } from "../utils/api/courses"
import { removeModal } from "../utils/helper"

const EditCourseModal = () => {

    const { refreshData, set_refreshData } = useContext(LoadContext)
    const { currentCourse } = useContext(CourseContext)
    const [ course, setCourse ] = useState({
        course_id: '',
        title: '',
        description: '',
        fee: 0
    })

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            removeModal('editCourseModal')
            await updateCourse(course, currentCourse.id)
            set_refreshData(!refreshData)
            message.success(`Update successful`)
            setCourse({title: '', description: '', fee: 0})
        } catch (err) {
            message.error(err.message)
        }
    }

    return (
        <div class="modal fade" role="dialog" tabIndex="-1" id="editCourseModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Course</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label>Course Title</label>
                                <input 
                                class="form-control form-control-sm" 
                                type="text" 
                                defaultValue={currentCourse.title}
                                onChange={e => setCourse({...course, title: e.target.value})}
                                />
                            </div>
                            <div class="form-group">
                                <label>Fee (GHc)</label>
                                <input 
                                class="form-control form-control-sm" 
                                type="number" 
                                defaultValue={currentCourse.fee}
                                onChange={e => setCourse({...course, fee: e.target.value})}
                                />
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <textarea 
                                class="form-control" 
                                defaultValue={currentCourse.description} 
                                onChange={e => setCourse({...course, description: e.target.value})}
                                />
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-sm btn-light" type="button" data-dismiss="modal">Close</button>
                                <button class="btn btn-sm btn-primary" type="submit">Update Course</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCourseModal