import axios from 'axios'

// const url = 'https://acfcb.herokuapp.com'
const url = 'http://localhost:8000'


export const login = async user => {
    try {
        const res = await axios.post(`${url}/auth/local`, {
            identifier: user.email,
            password: user.password
        })
        return res
    } catch (err) {
        throw err
    }
}

export const currentUser = async () => {
    try {
      return await axios.get(`${url}/users/me`, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
      })
    } catch (err) {
      console.error(err)
    }
  }