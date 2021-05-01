import { createContext, useState } from 'react'

export const CourseContext = createContext()

const CourseContextProvider = props => {

    const [ currentCourse, setCurrentCourse ] = useState({}) 
    const [ transactionDetail, setTransactionDetail ] = useState({})

    const set_currentCourse = course => {
        setCurrentCourse(course)
    }

    const set_detail = (student, course) => {
        const detail = {
            student, course
        }
        setTransactionDetail(detail)
    }

    return (
        <CourseContext.Provider value={{ currentCourse, transactionDetail, set_detail, set_currentCourse }}>
            { props.children }
        </CourseContext.Provider>
    )
}

export default CourseContextProvider