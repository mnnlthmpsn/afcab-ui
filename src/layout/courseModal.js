import { message } from "antd"
import { useContext, useEffect, useState } from "react"
import { LoadContext } from "../context/loadContext"
import { addCourse } from "../utils/api/courses"
import { removeModal } from "../utils/helper"

const CourseModal = () => {

    const { refreshData, set_refreshData } = useContext(LoadContext)
    const [ course, setCourse ] = useState({
        title: '',
        description: '',
        fee: 0
    })

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            removeModal('courseModal')
            await addCourse(course)
            set_refreshData(!refreshData)
            message.success(`${course.title} added successfully`)
            setCourse({title: '', description: '', fee: 0})
        } catch (err) {
            message.error(err.message)
        }
    }

    return (
        <div class="modal fade" role="dialog" tabIndex="-1" id="courseModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Course</h4>
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
                                value={course.title}
                                onChange={e => setCourse({...course, title: e.target.value})}
                                />
                            </div>
                            <div class="form-group">
                                <label>Fee (GHc)</label>
                                <input 
                                class="form-control form-control-sm" 
                                type="number" 
                                value={course.fee}
                                onChange={e => setCourse({...course, fee: e.target.value})}
                                />
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <textarea 
                                class="form-control" 
                                value={course.description} 
                                onChange={e => setCourse({...course, description: e.target.value})}
                                />
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-sm btn-light" type="button" data-dismiss="modal">Close</button>
                                <button class="btn btn-sm btn-primary" type="submit">Add Course</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseModal