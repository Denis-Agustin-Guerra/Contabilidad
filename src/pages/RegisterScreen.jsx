import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { register } from '../actions/auth';

import Swal from 'sweetalert2'


export const RegisterScreen = () => {
  // CommonJS
  const Swal = require('sweetalert2')

  const dispatch = useDispatch();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });

  const { username, email, password, password2 } = data;

  const handleChanges = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value
    })


    // console.log(value);
  }

  const handleRegister = (e) => {
    e.preventDefault()
    // console.log('Register');

    // Validaciones
    if (email.trim === "" || !email.trim().includes("@")) {
      Swal.fire('Error', '"User name" es requerido', 'error');
      return;
    }

    if (username.trim().length < 2) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El nombre de usuario debe tener al menos 2 caracteres',
      })
      return;
    }

    if (password.trim().length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La contraseña debe tener al menos 6 caracteres',
      })
      return;
    } else {
      if (password.trim() !== password2.trim()) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Las contraseñas no coinciden',
        })
        return;
      }

    }
    const handlePopup = () => {
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        timer: 1500
      })
    }

    dispatch(
      register(username, password, email),
      handlePopup()
    );
  }
  return (
    <div className=''>
      <h3>Register</h3>
      <hr />
      <div className="row">
        <form onSubmit={handleRegister} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">person</i>
                  <input onChange={handleChanges} value={username} name="username" id="username" type="text" className="validate" />
                  <label htmlFor="user name">User name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input onChange={handleChanges} value={email} name="email" id="email" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">key</i>
                  <input onChange={handleChanges} value={password} name="password" id="password" type="password" className="validate" />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">key</i>
                  <input onChange={handleChanges} value={password2} name="password2" id="password2" type="password" className="validate" />
                  <label htmlFor="password">Confirm Password</label>
                </div>
              </div>
            </div>
            <button className='btn' type='submit'>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterScreen