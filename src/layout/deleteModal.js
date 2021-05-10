import { message } from "antd";
import { useContext } from "react";
import { useHistory } from "react-router";
import { LoadContext } from "../context/loadContext";
import { deleteCourse } from "../utils/api/courses";
import { deleteStudent } from "../utils/api/students";

const DeleteModal = () => {

    const history = useHistory()
    const { refreshData, set_refreshData } = useContext(LoadContext)

    const handleDelete = async () => {
        let modelToDelete = localStorage.getItem('delete')
        
        if (modelToDelete === 'student'){
            try {
                const id = localStorage.getItem('sid')
                await deleteStudent(id)
                history.replace('/dashboard')
                message.success("Student Deleted Successfully")
            } catch (err) {
                message.error(err.message)
            }
        } else if (modelToDelete === 'course') {
            try {
                const id = localStorage.getItem('cid')
                await deleteCourse(id)
                message.success("Course deleted successfully")
                set_refreshData(!refreshData)
            } catch (err) {
                message.error(err.message)
            }
        }

    }

    return (
        <div class="modal fade" role="dialog" tabIndex="-1" id="deleteModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="lead">Are you sure you want to continue?</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body row justify-content-end px-5">
                        <button class="btn btn-sm btn-danger ml-3" data-dismiss="modal" onClick={e => handleDelete()}>Yes</button>
                        <button type="button" class="btn btn-sm btn-info ml-1" data-dismiss="modal">No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal