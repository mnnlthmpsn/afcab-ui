import axios from 'axios'

const url = process.env.NODE_ENV === 'production' 
            ? 'https://acfcb.herokuapp.com' 
            : 'http://localhost:1337'

export const accountDetails = async id => {
    try {
        return await axios.get(`${url}/accounts/${id}`, {
          headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
        })
      } catch (err) {
        throw err;
      }
}

export const makePayment = async (acc, amt, course) => {
  try {
    return await axios.post(`${url}/transactions`, {
      account: acc,
      amt_paid: parseInt(amt),
      course: course
    },
      {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
      }
    );
  } catch (err) {
    throw err;
  }
}

export const allTransactions = async acc_id => {
  try {
    return await axios.get(`${url}/transactions?account=${acc_id}`, 
      {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
      }
    );
  } catch (err) {
    throw err;
  }
}