import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRouter = ({ log, component: Component, ...resto }) => {
    // console.log("privateRouter");
    // console.log("Component",Component);
    // console.log("log",log);
    // console.log("resto",resto);
    return (
        <Route {...resto} 
        component={(props) =>
            log ? <Component {...props} /> : <Redirect to="/auth/login " />
        }
        />
    )
}

export default PrivateRouter