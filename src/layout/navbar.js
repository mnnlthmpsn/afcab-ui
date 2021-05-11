import { useEffect, useContext, useState } from "react"
import { useHistory } from "react-router"
import { LoadContext } from '../context/loadContext'
import { currentUser } from "../utils/api/auth"
import logo from '../assets/img/afcab.png'

import profilePic from '../assets/img/profile.png'

const Navbar = () => {

    const history = useHistory()
    const { refreshData } = useContext(LoadContext)
    const [user, setUser] = useState('')

    const getUser = async () => {
        try {
            const res = await currentUser()
            setUser(res.data)
        } catch (err) {
            console.log("Cannot get User")
        }
    }

    const logout = () => {
        sessionStorage.clear()
        localStorage.clear()
        history.replace('/')
    }

    useEffect(() => {
        getUser()
    }, [refreshData])

    return (
        <nav class="navbar navbar-light navbar-expand bg-white shadow-sm mb-4 topbar static-top">
            <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
                {/* <form class="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div class="input-group">
                        <input class="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                        <div class="input-group-append">
                            <button class="btn btn-primary py-0" type="button">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form> */}
                <div class="px-5">
                    <img class="img img-fluid" width='50' src={logo} />
                </div>
                <ul class="navbar-nav flex-nowrap ml-auto">
                    <li class="nav-item dropdown no-arrow">
                        <div class="nav-item dropdown no-arrow">
                            <a class="dropdown-toggle nav-link" aria-expanded="false" data-toggle="dropdown" href="#">
                                <span class="d-none d-lg-inline mr-2 text-gray-600 small">{user.email}</span>
                                <img class="border rounded-circle img-profile" width="30" src={profilePic} />
                            </a>
                            <div class="dropdown-menu shadow dropdown-menu-right animated--grow-in">
                                {/* <a class="dropdown-item" href="#">
                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i> Profile
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i> Settings
                                </a><a class="dropdown-item" href="#">
                                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i> Activity log
                                </a>
                                <div class="dropdown-divider"></div> */}
                                <p class="dropdown-item" role="button" onClick={e => logout()}>
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i> Logout
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar