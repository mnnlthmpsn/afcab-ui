import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'

// components
import Login from './components/login'
import Dashboard from './components/dashboard'
import Account from './components/account'
import PrivateRoute from './components/protectedRoute'
import Courses from './components/courses'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' component={Login} exact />
        <PrivateRoute path='/account/:id' component={Account} />
        <PrivateRoute path='/courses' component={Courses} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
      </Switch>
    </HashRouter>
  )
}

export default App;
