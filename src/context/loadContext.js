import { createContext, useState } from 'react'

export const LoadContext = createContext()

const LoadContextProvider = props => {

    const [ refreshData, setRefreshData ] = useState(false)

    const set_refreshData = tf => {
        setRefreshData(tf)
    }

    return (
        <LoadContext.Provider value={{ refreshData, set_refreshData }}>
            { props.children }
        </LoadContext.Provider>
    )
}

export default LoadContextProvider