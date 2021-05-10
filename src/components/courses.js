import { message } from "antd"
import { useEffect, useState, useContext } from "react"
import { LoadContext } from '../context/loadContext'
import { CourseContext } from '../context/courseContext'
import { allCourses } from "../utils/api/courses"
import Layout from '../layout'
import courseImg from '../assets/img/course.jpg'
import { formatter } from "../utils/helper"

const Courses = () => {

    const { refreshData } = useContext(LoadContext)
    const [courses, setCourses] = useState([])
    const { set_currentCourse } = useContext(CourseContext)

    const getCourses = async () => {
        try {
            const res = await allCourses()
            setCourses(res.data)
        } catch (err) {
            message.error(err.response.data.message)
        }
    }

    const handleCourseDelete = course_id => {
        localStorage.setItem('delete', 'course')
        localStorage.setItem('cid', course_id)
    }

    const storeCourseID = course => {
        set_currentCourse(course)
        localStorage.setItem('course', course.id)
    }

    useEffect(() => {
        getCourses()
    }, [refreshData])

    return (
        <Layout title='Courses'
            button={
                <button class="btn btn-outline-primary btn-sm mr-1" type="button" data-toggle="modal" data-target="#courseModal">Add Course
        <i class="fas fa-book-medical pl-2"></i>
                </button>
            }
        >
            <div class="container">
                <div class="row">
                    {
                        !courses.length
                            ? <p class='lead text-center'>No Courses</p>
                            : courses.map(course => (
                                <div class="col col-12 col-md-6 col-lg-3 mb-2" key={course.id}>
                                    <div class="card h-100">
                                        <img src={courseImg} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-uppercase h6">{course.title}</h5>
                                            <p class="card-text text-secondary">{course.description}</p>
                                            <p>Fee: <span class="lead text-secondary">{formatter.format(course.fee)}</span></p>
                                        </div>
                                        <div class="card-footer">
                                            <div class="row justify-content-center">
                                                <button role="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="bottom" title="Edit Course"
                                                    onClick={() => storeCourseID(course)} data-toggle="modal" data-target="#editCourseModal">
                                                    <i role="button" class="fas fa-edit"></i>
                                                </button>
                                                <button role="button" class="btn btn-sm btn-info ml-1" data-toggle="tooltip" data-placement="bottom" title="Course details">
                                                    <i role="button" class="fas fa-eye"></i>
                                                </button>
                                                <button role="button" class="btn btn-sm btn-warning ml-1" data-toggle="tooltip" data-placement="bottom" title="Add Student to Course"
                                                    data-toggle="modal" data-target="#studentCourseModal"
                                                    onClick={() => storeCourseID(course)}
                                                >
                                                    <i role="button" class="fas fa-plus"></i>
                                                </button>
                                                <button role="button" class="btn btn-sm btn-danger ml-1" data-toggle="tooltip" data-placement="bottom" title="Delete Course" data-toggle="modal" data-target="#deleteModal" onClick={() => handleCourseDelete(course.id)}>
                                                    <i role="button" class="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Courses