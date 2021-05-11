import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import Layout from "../layout"
import {  getCourseSelection } from "../utils/api/courses"


const CourseDetail = () => {

    const { course_id } = useParams()
    const [courses, setCourses] = useState([])

    const getSelections = async () => {
        const res = await getCourseSelection(course_id)
        setCourses(res.data)
    }

    useEffect(() => {
        getSelections()
    }, [])

    return (
        <Layout title="Enrolled Students">
            <div class="container">
                                
                <table class="table mb-5">
                    <thead class="thead-light">
                        <tr>
                            <th style={{ width: '5%' }}>#</th>
                            <th scope="col-3">Date Enrolled</th>
                            <th>Student</th>
                            <th style={{ width: '25%' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !courses.length
                                ? <td colSpan={4}>
                                    <p class="text-center lead">No Student Enrolled for this Course</p>
                                </td>
                                : courses.map((course, i) => (
                                    <tr key={course.id}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{course.created_at}</td>
                                        <td>{course.student.firstname} {course.student.other_names} {course.student.lastname}</td>
                                        <td>
                                            <Link to={`/account/${course.student.account}`}>
                                                <button class="btn btn-primary btn-sm">
                                                    <i class="fas fa-eye"></i> Account Details
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default CourseDetail