import React from 'react'
import GoogleButton from 'react-google-button'
import { Link } from "react-router-dom";


const LoginScreen = () => {
    return (
        <div className='container'>
            <h3>Login</h3>
            <hr />
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">

                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">email</i>
                                    <input id="email" type="email" class="validate" />
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">key</i>
                                    <input id="password" type="password" class="validate" />
                                    <label for="password">Password</label>
                                </div>
                            </div>
                        </div>
                        <button className='btn' type='submit'>Enviar</button>

                    </div>
                    <hr />
                    <GoogleButton onClick={() => console.log('google')} />
                    <Link to='/register'>Register in the platform</Link>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen