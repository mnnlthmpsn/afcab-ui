import axios from 'axios'

const url = 'https://acfcb.herokuapp.com'

export const addCourse = async course => {
  try {
    return await axios.post(`${url}/courses`, course,
      {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
      }
    );
  } catch (err) {
    throw err;
  }
};

export const allCourses = async () => {
  try {
    return await axios.get(`${url}/courses`, {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
    })
  } catch (err) {
    throw err;
  }
}

export const updateCourse = async (course, course_id) => {
  try {
    await axios.put(`${url}/courses/${course_id}`, course,
      {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
      }
    );
  } catch (err) {
    throw err
  }
}

export const courseSelections = async student_id => {
  try {
    return await axios.get(`${url}/course-selections?student=${student_id}`, {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
    })
  } catch (err) {
    throw err
  }
}

export const enrollStudentToCourse = async (course_id, student_id) => {
  console.log(course_id, student_id)
  try {
    await axios.post(`${url}/course-selections`,
      {
        student: student_id,
        course: course_id
      },
      {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
      }
    );
  } catch (err) {
    throw err
  }
}