import axios from 'axios'

const url = process.env.REACT_APP_HOST_ADDRESS

export const accountDetails = async id => {
    try {
        return await axios.get(`${url}/accounts/${id}`, {
          headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
        })
      } catch (err) {
        throw err;
      }
}