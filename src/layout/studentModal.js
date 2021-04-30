import { message } from 'antd'
import { useContext, useState } from 'react'
import { LoadContext } from '../context/loadContext'
import { addStudent } from '../utils/api/students'
import { removeModal } from '../utils/helper'

const StudentModal = () => {

    const { refreshData, set_refreshData } = useContext(LoadContext)

    const [student, setStudent] = useState({
        firstname: '',
        lastname: '',
        other_names: '',
        phone: '',
        gender: ''
    })

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            removeModal('studentModal')
            await addStudent(student)
            set_refreshData(!refreshData)
            message.success(`${student.firstname} ${student.other_names} ${student.lastname} added successfully`)
            setStudent({firstname: '', lastname: '', other_names: '', phone: '', gender: ''})
        } catch (err) {
            message.error(err.response.data.message)
        }
    }

    return (
        <div class="modal fade" role="dialog" tabindex="-1" id="studentModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Enroll Student</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label>Firstname</label>
                                <input class="form-control form-control-sm" type="text"
                                    value={student.firstname}
                                    onChange={e => setStudent({ ...student, firstname: e.target.value })}
                                />
                            </div>
                            <div class="form-group">
                                <label>Lastname</label>
                                <input class="form-control form-control-sm" type="text"
                                    value={student.lastname}
                                    onChange={e => setStudent({ ...student, lastname: e.target.value })}
                                />
                            </div>
                            <div class="form-group">
                                <label>Other Names</label>
                                <input class="form-control form-control-sm" type="text"
                                    value={student.other_names}
                                    onChange={e => setStudent({ ...student, other_names: e.target.value })}
                                />
                            </div>
                            <div class="form-group">
                                <label>Gender</label>
                                <select class="form-control"
                                    required
                                    value={student.gender}
                                    onChange={e => setStudent({ ...student, gender: e.target.value })}
                                >
                                    <option>Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Phone</label>
                                <input class="form-control form-control-sm" type="tel" 
                                    value={student.phone}
                                    onChange={e => setStudent({...student, phone: e.target.value})}
                                />
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-sm btn-light" type="button" data-dismiss="modal">Close</button>
                                <button class="btn btn-sm btn-primary" type="submit">Enroll Student</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentModal