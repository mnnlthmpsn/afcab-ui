import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      JSON.parse(sessionStorage.getItem('auth')) === true
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )

export default PrivateRoute