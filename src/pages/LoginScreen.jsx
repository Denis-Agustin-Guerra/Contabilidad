import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import GoogleButton from 'react-google-button'
import { Link } from "react-router-dom";
import { googleLogin, startLoginEmailPassword } from '../actions/auth';
import RegisterScreen from './RegisterScreen';


const LoginScreen = () => {


    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = data;

    const handleChanges = (e) => {
        const value = e.target.value;

        setData({
            ...data,
            [e.target.name]: value
        })


        // console.log(value);
    }




    const dispatch = useDispatch();

    const handleGoogleLongin = () => {
        dispatch(googleLogin());
    }
    // const handleRegister = () => {
    //     dispatch(<RegisterScreen/>);
    // }
    const handleEmailLogin = (e) => {
        e.preventDefault();
        if (email.trim === "" || !email.trim().includes("@")) {
            return;
        }
        if (password.trim().length < 6) {
            return;
        }
        dispatch(startLoginEmailPassword(email, password));
    }
    return (
        <div className='container'>
            <h3>Login</h3>
            <hr />
            <div className="row">
                <form onSubmit={handleEmailLogin} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">email</i>
                                    <input onChange={handleChanges} name='email' id="email" type="email" className="validate white-text" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">key</i>
                                    <input id="password" onChange={handleChanges} name='password' type="password" className="validate white-text" />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                        </div>
                        <button className='btn' type='submit'>Enviar</button>
                    </div>
                    <hr />
                    <GoogleButton onClick={handleGoogleLongin} />
                    {/* <button onClick={handleRegister} className='btn'>Register</button> */}
                    <Link to='/auth/register'>Register in the platform</Link>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen