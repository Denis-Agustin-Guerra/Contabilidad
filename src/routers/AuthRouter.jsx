import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'

const AuthRouter = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegisterScreen}/>   
        </Switch>
    </Router>
  )
}

export default AuthRouter