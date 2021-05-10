import axios from 'axios'

const url = process.env.NODE_ENV === 'production' 
            ? 'https://acfcb.herokuapp.com' 
            : 'http://localhost:1337'

export const transactionDetail = async tid => {
    try {
      return await axios.get(`${url}/transactions/${tid}`, { 
        headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
       })
    } catch (err) {
      throw err;
    }
  }