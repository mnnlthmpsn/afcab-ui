import axios from 'axios'

// const url = 'https://acfcb.herokuapp.com'
const url = 'http://localhost:8000'


export const allStudents = async () => {
    try {
        return await axios.get(`${url}/students`, {
          headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
        })
      } catch (err) {
        throw err;
      }
}

export const addStudent = async student => {
  try {
    return await axios.post(`${url}/students`, student,
      {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
      }
    );
  } catch (err) {
    throw err;
  }
};