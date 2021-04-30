import { createContext, useState } from 'react'

export const CourseContext = createContext()

const CourseContextProvider = props => {

    const [ currentCourse, setCurrentCourse ] = useState({}) 

    const set_currentCourse = course => {
        setCurrentCourse(course)
    }

    return (
        <CourseContext.Provider value={{ currentCourse, set_currentCourse }}>
            { props.children }
        </CourseContext.Provider>
    )
}

export default CourseContextProvider