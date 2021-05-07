import axios from 'axios'

const url = process.env.NODE_ENV === 'production' 
            ? 'https://acfcb.herokuapp.com' 
            : 'http://localhost:1337'


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

export const deleteStudent = async id => {
  try {
    return await axios.delete(`${url}/students/${id}`, { 
      headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
     })
  } catch (err) {
    throw err;
  }
}