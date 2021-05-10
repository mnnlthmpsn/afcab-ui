import { useContext, useState } from 'react'
import { message } from "antd"
import { removeModal } from '../utils/helper'
import { LoadContext } from '../context/loadContext'
import { CourseContext } from '../context/courseContext'
import { makePayment } from '../utils/api/account'

const PaymentModal = () => {

    const { refreshData, set_refreshData } = useContext(LoadContext)
    const { transactionDetail } = useContext(CourseContext)
    const [amt, setAmt] = useState(0)

    const handleSubmit = async e => {
        e.preventDefault()
        
        try {
            removeModal('paymentModal')
            await makePayment(transactionDetail.student.account, amt, transactionDetail.course)
            set_refreshData(!refreshData)
            message.success(`Fees paid successfully`)
        } catch (err) {
            message.error(err.message)
        }
    }

    return (
        <div class="modal fade" role="dialog" tabIndex="-1" id="paymentModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Payment </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <input type="number" class="form-control" placeholder="Amount paying" onChange={e => setAmt(e.target.value)} required />
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-sm btn-light" type="button" data-dismiss="modal">Close</button>
                                <button class="btn btn-sm btn-primary" type="submit">Make Payment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentModal