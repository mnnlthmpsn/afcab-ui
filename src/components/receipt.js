import { message } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import logo from '../assets/img/afcab.png'
import { getLoggedInUser } from '../utils/api/account'
import { getCourse } from '../utils/api/courses'
import { getStudent } from '../utils/api/students'
import { transactionDetail } from '../utils/api/transaction'
import { formatter } from '../utils/helper'

const Receipt = () => {

    const { transaction_id } = useParams()
    const [transaction, setTransaction] = useState({})
    const [student, setStudent] = useState({})
    const [initiator, setInitiator] = useState({})
    const [course, setCourse] = useState({})

    const getTransaction = async () => {
        try {
            const trans = await transactionDetail(transaction_id)
            setTransaction(trans.data)
            const stud = await getStudent(trans.data.account.student)
            setStudent(stud.data)
            const cour = await getCourse(trans.data.course.id)
            setCourse(cour.data)
        } catch (err) {
            message.error(err.message)
        }
    }

    const getInitiator = async () => {
        try {
            const res = await getLoggedInUser()
            setInitiator(res.data)
        } catch (err) {
            message.error("Server connection lost")
        }
    }


    useEffect(async () => {
        await getTransaction()
        await getInitiator()
        window.print()
    }, [])

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-4" style={{ borderBottomStyle: 'solid', height: ' 50px' }}>
                    <div></div>
                </div>
                <div class="col-md-4 text-center d-lg-flex justify-content-lg-center align-items-lg-end p-0 m-0">
                    <h2 class="text-center" style={{ paddingTop: ' 26px' }}>Official Receipt</h2>
                </div>
                <div class="col-md-4" style={{ borderBottomStyle: 'solid', height: ' 50px' }}>
                    <div></div>
                </div>
            </div>
            <div class="row pt-5">
                <div class="col">
                    <div class="row">
                        <div class="col col-3"><img class="img-fluid" src={logo} style={{ width: '100px' }} /></div>
                        <div class="col text-center d-lg-flex align-items-lg-center">
                            <h5>AFRICAN CENTER FOR CAPACITY BUILDING</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <div class="col text-right d-lg-flex justify-content-lg-end">
                            <h5>Receipt #: {transaction_id}</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col d-lg-flex justify-content-lg-end">
                            <h5 class="text-right">Date: {new Date().toISOString().slice(0, 10)}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-3" style={{ borderBottom: '1px solid var(--gray)' }}></div>
            <div class="row pt-5">
                <div class="col">
                    <h6>AFCAB</h6>
                    <h6>Airport Hills, Accra</h6>
                    <h6>https://afcabgh.com/</h6>
                    <h6>+233 302914047/+233 244405047</h6>
                </div>
                <div class="col text-right">
                    <h6>{student.firstname} {student.other_names} {student.lastname}</h6>
                    <h6>{student.phone}</h6>
                </div>
            </div>
            <div class="table-responsive table mt-2 pt-5" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                <table class="table my-0" id="dataTable">
                    <thead class="thead-light">
                        <tr>
                            <th>Course</th>
                            <th class="text-right">Amount Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{course.title}</td>
                            <td class="text-right">{formatter.format(transaction.amt_paid)}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="text-right"><strong>Total</strong></td>
                            <td class="text-right"><strong>{formatter.format(transaction.amt_paid)}</strong></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="row pt-4 p-0">
                <div class="col d-lg-flex justify-content-lg-end">
                    <div class="col-4">
                        <p class="p-0 m-0">{initiator.email}</p>
                        <hr />
                        <label class="small p-0 mb-3">Staff signature</label>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Receipt