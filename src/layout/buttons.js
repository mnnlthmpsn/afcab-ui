import { Link, useLocation } from 'react-router-dom';

const Buttons = () => {

    const location = useLocation()

    return (
        <div class="container">
            <div class="row mb-3">
                <div class="col d-flex justify-content-end">
                    <div role="group">
                        {
                            location.pathname !== "/dashboard" &&
                            <Link to='/dashboard'>
                                <button class="btn btn-outline-primary btn-sm mr-1" type="button">Home
                                    <i class="fas fa-home pl-2"></i>
                                </button>
                            </Link>
                        }

                        {
                            location.pathname !== "/courses" &&
                            <Link to="/courses">
                                <button class="btn btn-outline-primary btn-sm mr-1" type="button">View All Courses
                                    <i class="fas fa-eye pl-2"></i>
                                </button>
                            </Link>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buttons