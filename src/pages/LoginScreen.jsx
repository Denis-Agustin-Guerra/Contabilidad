import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import GoogleButton from 'react-google-button'
import { Link } from "react-router-dom";
import { googleLogin, startLoginEmailPassword } from '../actions/auth';
import RegisterScreen from './RegisterScreen';
import M from 'materialize-css/dist/js/materialize.min.js';
import elems from 'materialize-css';


const LoginScreen = () => {

    var instances = M.FormSelect.init(elems, {});



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
        <div className='col container'>
            
            <h3>Sistema de contabilidad UTN-frm</h3>
            <div className='col s12 container center'>
                <img className='radius' src="../logo_UTN.png" alt="Logo-UTN" />
            </div>
            <hr />
            <h3>Login</h3>
            <div className="container">

                <div className="row">
                    <div class="col s12">
                        <ul class="tabs">
                            <li class="tab col s3"><a class="active" href="#login">Login</a></li>
                            <li class="tab col s3"><a href="#register">Register</a></li>
                        </ul>
                    </div>
                    <div id="login" class="col s12">
                        <form onSubmit={handleEmailLogin} className="col s12">
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
                            <hr />
                            <GoogleButton onClick={handleGoogleLongin} />
                        </form>
                    </div>
                    <div id="register" class="col s12"><RegisterScreen /></div>
                </div>







            </div>
        </div>
    )
}

export default LoginScreen