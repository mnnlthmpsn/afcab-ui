import { Redirect } from "react-router"

export const _redirect = path => {
    return <Redirect to={path}/>
}

export const removeModal = id => {
    window.$(`#${id}`).modal('hide');
}

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GHC'
})