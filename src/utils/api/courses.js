import axios from 'axios'

const url = process.env.NODE_ENV === 'production' 
            ? 'https://acfcb.herokuapp.com' 
            : 'http://localhost:1337'


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

export const getCourse = async cid => {
  try {
    return await axios.get(`${url}/courses/${cid}`, {
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

export const deleteCourse = async id => {
  try {
    return await axios.delete(`${url}/courses/${id}`, { 
      headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
     })
  } catch (err) {
    throw err;
  }
}

export const checkStudentCourse = async (course, student) => {
  try {
    return await axios.get(`${url}/course-selections?[course.id]=${course}&[student.id]=${student}`, { 
      headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
     })
  } catch (err) {
    throw err;
  }
}

// course selection for particular course
export const getCourseSelection = async course_id => {
  try {
    return await axios.get(`${url}/course-selections?[course.id]=${course_id}`, {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("uri")}` }
    })
  } catch (err) {
    throw err;
  }
}