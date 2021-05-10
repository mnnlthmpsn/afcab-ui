import { message } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { CourseContext } from '../context/courseContext'
import { LoadContext } from '../context/loadContext'
import Layout from '../layout'
import { accountDetails, allTransactions } from '../utils/api/account'
import { courseSelections } from '../utils/api/courses'
import { formatter } from '../utils/helper'

const Account = () => {

    const { id } = useParams()
    const { refreshData } = useContext(LoadContext)
    const { set_detail } = useContext(CourseContext)

    const [account, setAccount] = useState({})
    const [courses, setCourses] = useState([])
    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState(false)

    const getAccountDetails = async () => {
        try {
            setLoading(true)
            const res = await accountDetails(id)
            setAccount(res.data)
            getCourses(res.data.student.id)
            getTransactions(res.data.id)
            setLoading(false)
        } catch (err) {
            setLoading(false)
            message.error(err.message)
        }
    }

    const storeDetails = (student, course) => {
        set_detail(student, course)
    }

    const getCourses = async id => {
        try {
            const res = await courseSelections(id)
            setCourses(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const getTransactions = async id => {
        try {
            const res = await allTransactions(id)
            setTransactions(res.data)
        } catch (err) {
            message.error(err.message)
        }
    }

    const handleStudentDelete = e => {
        localStorage.setItem('delete', 'student');
        localStorage.setItem('sid', id)
    }

    useEffect(() => {
        getAccountDetails()
    }, [refreshData])

    return (
        <Layout title='Account Details'>
            <div class="container">
                <div class="row justify-content-between mx-5">
                    {
                        loading
                            ? <p class="text-center">...Loading</p>
                            : <>
                                <p class="text-uppercase text-secondary">Account Name:
                                     <span class="text-dark">
                                        {`${account.student?.firstname} ${account.student?.other_names} ${account.student?.lastname}`}
                                    </span>
                                </p>
                                <p class="text-uppercase text-secondary">Amount Due: <span class="text-dark">{formatter.format(account.amt_due)}</span></p>
                            </>
                    }
                </div>
                <hr class="w-100" />
            </div>

            <div class="mx-5">
                <p class="lead">Enrolled Courses</p>
            </div>
            <table class="table mb-5">
                <thead class="thead-light">
                    <tr>
                        <th style={{ width: '5%' }}>#</th>
                        <th scope="col-3">Date Enrolled</th>
                        <th style={{ width: '25%' }}>Course</th>
                        <th style={{ width: '25%' }}>Fee</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !courses.length
                            ? <td colSpan={4}>
                                <p class="text-center lead">Student Not enrolled in any course</p>
                            </td>
                            : courses.map((course, i) => (
                                <tr key={course.id}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{course.created_at}</td>
                                    <td>{course.course.title}</td>
                                    <td>{formatter.format(course.course.fee)}</td>
                                    <td>
                                        <div class="row">
                                            <button class="btn btn-primary btn-sm mr-1"
                                                type="button" data-toggle="modal" data-target="#paymentModal" onClick={() => storeDetails(account.student, course.course.id)}>Make Payment
                                            <i class="fas fa-money-bill-wave-alt pl-2"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>

            <hr class="w-100 mb-5" />

            {/* table start */}
            <div class="mx-5">
                <p class="lead">Transactions</p>
            </div>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th style={{ width: '5%' }}>#</th>
                        <th scope="col-3">Date</th>
                        <th>Course</th>
                        <th style={{ width: '20%' }}>Amount Paid</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !transactions.length
                            ? <td colSpan={5}>
                                <p class="lead text-center mt-4">No transactions made on Account</p>
                            </td>
                            : transactions.map((tr, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{tr.created_at}</td>
                                    <td>{tr.course.title}</td>
                                    <td>{tr.amt_paid}</td>
                                    <td class="row justify-content-center">
                                        <Link to={`/receipt/${tr.id}`} download>
                                            <button class="btn btn-sm btn-success">
                                                <i class="fas fa-download"></i> Generate Receipt
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
            {/* table end */}

            <div class="card-footer">
                <div class="row justify-content-end">
                    <button class="btn btn-outline-primary btn-sm mr-1" type="button" data-toggle="modal" data-target="#">Edit Student
                                    <i class="fas fa-edit pl-2"></i>
                    </button>
                    <button class="btn btn-danger btn-sm mr-1" type="button" data-toggle="modal" data-target="#deleteModal" onClick={handleStudentDelete}>Delete Student
                                    <i class="fas fa-trash pl-2"></i>
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default Account