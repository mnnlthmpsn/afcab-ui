import CourseModal from './courseModal'
import Navbar from './navbar'
import Buttons from './buttons'
import StudentModal from './studentModal'
import EditCourseModal from './editCourseModal'
import StudentCourseModal from './studentCourseModal'

const Layout = props => {
    return (
        <div id="wrapper">
            <div class="d-flex flex-column" id="content-wrapper">
                <div id="content" style={{ background: 'white' }}>
                    <Navbar />
                    <Buttons />
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="card shadow mb-5">
                                    <div class="card-header py-3">
                                        <div class="row justify-content-between mx-5">
                                            <p class="text-primary m-0 font-weight-bold">{props.title}</p>
                                            {props.button}
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        {props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <CourseModal />
            <StudentModal />
            <EditCourseModal />
            <StudentCourseModal />
        </div>
    )
}

export default Layout