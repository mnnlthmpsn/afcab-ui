import { message } from "antd"
import { useState } from "react"
import { login } from '../utils/api/auth'

import { useHistory } from 'react-router-dom'
import img from '../assets/img/edu.jpg'

const Login = () => {

    const history = useHistory();

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleLogin = async e => {
        setLoading(true)
        try {
            e.preventDefault()
            const res = await login(user)
            sessionStorage.setItem('auth', true)
            sessionStorage.setItem('uri', res.data.jwt)
            history.replace('/dashboard')
        } catch (err) {
            message.error(err.message)
            setLoading(false)
        }
    }

    return (

        <div class="container vh-100">
            <div class="row align-items-center justify-content-center vh-100">
                <div class="col-md-9 col-lg-12 col-xl-10">
                    <div class="card shadow-lg o-hidden border-0 my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-flex">

                                    <div class="flex-grow-1 bg-login-image" style={{
                                        backgroundImage: `url(${img})`, backgroundSize: "cover"
                                    }} ></div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h4 class="text-dark mb-4">Welcome Back!</h4>
                                        </div>
                                        <form class="user" onSubmit={handleLogin}>
                                            <div class="form-group">
                                                <input type="email"
                                                    onChange={e => setUser({ ...user, email: e.target.value })}
                                                    class="form-control form-control-user"
                                                    placeholder="Enter Email Address..." required />
                                            </div>
                                            <div class="form-group">
                                                <input type="password"
                                                    onChange={e => setUser({ ...user, password: e.target.value })}
                                                    class="form-control form-control-user"
                                                    placeholder="Password" required />
                                            </div>
                                            <button class="btn btn-primary w-100" type="submit" disabled={loading}>
                                                { loading ? <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> : 'Login' }
                                            </button>
                                            <hr />
                                        </form>
                                        <div class="text-center"><a class="small" href="forgot-password.html">Forgot Password?</a></div>
                                        <div class="text-center"><a class="small" href="register.html">Create an Account!</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login