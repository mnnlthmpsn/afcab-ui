import { message } from "antd"
import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { LoadContext } from '../context/loadContext'
import Layout from "../layout"
import { allStudents } from "../utils/api/students"
import profilePic from '../assets/img/profile.png'

const Dashboard = () => {

    const { refreshData } = useContext(LoadContext)
    const [students, setStudents] = useState([])

    const getStudents = async () => {
        try {
            const res = await allStudents()
            setStudents(res.data)
        } catch (err) {
            message.error(err.message)
        }
    }

    useEffect(() => {
        getStudents()
    }, [refreshData])

    return (
        <Layout 
            title='Students'
            button={
                <button class="btn btn-outline-primary btn-sm mr-1" type="button" data-toggle="modal" data-target="#studentModal">Enroll Student
                    <i class="fas fa-user-plus pl-2"></i>
                </button>
            }
        >
            <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
            <table class="table my-0" id="dataTable">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Other Names</th>
                        <th>Lastname</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Account</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !students.length ? <tr>
                            <td colSpan="6">
                                <p class="lead text-center mt-5">
                                    Enroll a Student to view their details
                                                        </p>
                            </td>
                        </tr> : students.map(stud => (
                            <tr key={stud.id}>
                                <td><img class="rounded-circle mr-2" width="30" height="30" src={profilePic} />{stud.firstname}</td>
                                <td>{stud.other_names}</td>
                                <td>{stud.lastname}</td>
                                <td>{stud.gender}</td>
                                <td>{stud.phone}</td>
                                <td>
                                    <Link to={`/account/${stud.account.id}`}>
                                        <button class="btn btn-outline-primary btn-sm" type="button">Account Details</button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr></tr>
                </tfoot>
            </table>
        </div>
        </Layout>
    )
}

export default Dashboard