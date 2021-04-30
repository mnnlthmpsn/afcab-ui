import axios from 'axios'

const url = 'https://acfcb.herokuapp.com'

export const accountDetails = async id => {
    try {
        return await axios.get(`${url}/accounts/${id}`, {
          headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
        })
      } catch (err) {
        throw err;
      }
}