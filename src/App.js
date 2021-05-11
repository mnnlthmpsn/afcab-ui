import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

// components
import Login from './components/login'
import Dashboard from './components/dashboard'
import Account from './components/account'
import PrivateRoute from './components/protectedRoute'
import Courses from './components/courses'
import Receipt from './components/receipt'
import CourseDetail from './components/courseDetail'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' component={Login} exact />
        <PrivateRoute path='/account/:id' component={Account} />
        <PrivateRoute path='/course/:course_id' component={CourseDetail} />
        <PrivateRoute path='/courses' component={Courses} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/receipt/:transaction_id' component={Receipt} />
      </Switch>
    </HashRouter>
  )
}

export default App;
