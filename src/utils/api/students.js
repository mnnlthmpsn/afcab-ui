import axios from 'axios'

const url = process.env.REACT_APP_HOST_ADDRESS

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