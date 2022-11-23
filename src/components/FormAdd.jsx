import { async } from '@firebase/util';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { crearRegistro, leerRegistros } from '../actions/nomina';
import { loadData } from '../helpers/loadData';
import { firebase } from '../firebase/config_firebase'
import login from '../actions/auth';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


const FormAdd = () => {
    // CommonJS
    const Swal = require('sweetalert2')

    // Select Materialize
    // definir M
    // const M = window.M;
    // document.addEventListener('DOMContentLoaded', function () {
    //     var elems = document.querySelectorAll('select');
    //     var instances = M.FormSelect.init(elems, {});
    // });
    // componentDidMount() {
    //     const element = ReactDOM.findDOMNode(this.refs.dropdown);

    //     $(element).ready(function () {
    //         $('select').material_select();
    //     });
    // }


    const dispatch = useDispatch();
    const [viewForm, setViewForm] = useState(false);


    const [datos, setDatos] = useState(
        {
            fecha: '',
            debehaber: '',
            cuenta: '',
            monto: '',
        }
    );
    const { fecha, debehaber, cuenta, monto, debehaber2, cuenta2, monto2 } = datos;


    const handleAdd = () => {
        setViewForm(!viewForm);
    }

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }


    const handleSave = async () => {
        // console.log(debehaber)
        // console.log(cuenta)
        if (fecha.trim() !== '' && cuenta.trim() !== '' && monto.trim() !== '' && cuenta2.trim() !== '' && monto2.trim() !== '' && debehaber.trim() !== '') {
            if (monto === monto2) {
                if (debehaber.toLowerCase().trim() === 'debe') {
                    const debehaber2='Haber'
                    const debehaber='Debe'
                    // console.log(debehaber)
                    dispatch(crearRegistro(fecha, debehaber, cuenta, monto));
                    // const handleSave2 = () => {
                    dispatch(crearRegistro(fecha, debehaber2, cuenta2, monto2)); //debehaber ponerlo en 2 cuando se tenga la funcion 
                    // }
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Guardado con exito',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }else{
                    if (debehaber.toLowerCase().trim() === 'haber') {
                        const debehaber2='Debe'
                        const debehaber='Haber'
                        console.log(debehaber)
                        dispatch(crearRegistro(fecha, debehaber, cuenta, monto));
                        // const handleSave2 = () => {
                        dispatch(crearRegistro(fecha, debehaber2, cuenta2, monto2)); //debehaber ponerlo en 2 cuando se tenga la funcion 
                        // }
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Guardado con exito',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Debe ingresar solamente "Debe" o "Haber" en el campo "Debe o Haber"',
                        })
                    }
                }
                // if (debehaber.toLowerCase().trim() !== 'debe' || debehaber.toLowerCase().trim() !== 'haber' ) {
                    
                // }
                    
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Los montos no coinciden',
                })
            }

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debe completar todos los campos',
            })
        }
    }


    const handleReload = async () => {
        firebase.auth().onAuthStateChanged(async (user) => {


            const ragistroData = await loadData(user.uid);
            dispatch(leerRegistros(ragistroData))

        });
    }
    // var instance = M.FormSelect.getInstance(elem);

    // console.log(instance);

    return (
        <div>
            <button onClick={handleAdd} className="waves-effect waves-light btn">{!viewForm ? "Agregar" : "Cerrar"}</button>

            {viewForm && (
                <div>
                    <div className="row">
                        <div className="col s12 m6 l3"><input className='white-text'
                            type="date"
                            onChange={handleChange}
                            value={fecha}
                            name="fecha"
                        /></div>

                        <div className="col s12 m6 l3"><input className='white-text'
                            type="text"
                            placeholder='Tipo de Cuenta'
                            onChange={handleChange}
                            value={cuenta}
                            name="cuenta"
                        /></div>
                        <div className="col s12 m6 l3"><input className='white-text'
                            type="number"
                            placeholder='Ingresar monto'
                            onChange={handleChange}
                            value={monto}
                            name="monto"
                        /></div>
                        <div className="col s12 m6 l3">
                            <input className='white-text'
                            type="text"
                            placeholder='Debe o Haber'
                            onChange={handleChange}
                            value={debehaber}
                            name="debehaber"
                        />
                            {/* <select value="" onChange={handleChange} className="browser-default">
                                <option value="" disabled selected>Elija una opcion</option>
                                <option value="Debe" name="debe">Debe</option>
                                <option value="Haber" name="haber">Haber</option>
                            </select>
                            <label>Debe o Haber</label> */}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col s12 m6 l3"><input className='white-text'
                            type="date"
                            onChange={handleChange}
                            value={fecha}
                            name="fecha"
                        /></div>

                        <div className="col s12 m6 l3"><input className='white-text'
                            type="text"
                            placeholder='Tipo de Cuenta'
                            onChange={handleChange}
                            value={cuenta2}
                            name="cuenta2"
                        /></div>
                        <div className="col s12 m6 l3"><input className='white-text'
                            type="number"
                            placeholder='Ingresar monto'
                            onChange={handleChange}
                            value={monto2}
                            name="monto2"
                        /></div>
                    </div>
                    <hr />
                    <button onClick={() => {
                        // handleSave2();
                        handleSave();
                        handleReload();
                    }} className='btn blue' >Guardar</button>
                </div>
            )
            }
        </div>
    )
}


export default FormAdd