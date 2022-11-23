import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import AppScreen from '../pages/AppScreen';
import LoginScreen from '../pages/LoginScreen';

const PublicRouter = ({ log, component: Component, ...resto }) => {
    // console.log("publicRouter");
    // console.log("Component",Component.props);
    // console.log("log",log);
    // console.log("resto",resto);
    return (
        <Route {...resto}
        component={(props) =>
            log ? <AppScreen /> : <Component {...props} /> //<LoginScreen />
        }
        />
    )
}

export default PublicRouter