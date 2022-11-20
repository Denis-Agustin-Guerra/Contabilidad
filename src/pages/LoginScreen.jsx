import React from 'react'
import { useDispatch } from 'react-redux';
import GoogleButton from 'react-google-button'
import { Link } from "react-router-dom";
import { googleLogin } from '../actions/auth';


const LoginScreen = () => {

    const dispatch = useDispatch();

    const handleGoogleLongin = () => {
        dispatch(googleLogin("12345", "Agustin"));
    }

    return (
        <div className='container'>
            <h3>Login</h3>
            <hr />
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">email</i>
                                    <input id="email" type="email" className="validate" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">key</i>
                                    <input id="password" type="password" className="validate" />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                        </div>
                        <button className='btn' type='submit'>Enviar</button>
                    </div>
                    <hr />
                    <GoogleButton onClick={handleGoogleLongin} />
                    <Link to='/register'>Register in the platform</Link>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen