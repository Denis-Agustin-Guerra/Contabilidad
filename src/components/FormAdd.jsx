import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { crearRegistro } from '../actions/nomina';

const FormAdd = () => {

    const dispatch = useDispatch();
    const [viewForm, setViewForm] = useState(false);


    const [datos, setDatos] = useState(
        {
            fecha: '',
            debehaber: '',
            cuenta: '',
            monto: 0
        }
    );
    const { fecha, debehaber, cuenta, monto } = datos;

    const handleAdd = () => {
        setViewForm(!viewForm);
    }

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }

    const handleSave = () => {
        dispatch(crearRegistro(fecha, debehaber, cuenta, monto));
    }

    return (
        <div>
            <button onClick={handleAdd} className="waves-effect waves-light btn">{!viewForm ? "Agregar" : "Cerrar"}</button>

            {viewForm && (
                <div>
                    <div class="row">
                        <div class="col s12 m6 l3"><input className='white-text'
                            type="date"
                            onChange={handleChange}
                            value={fecha}
                            name="fecha"
                        /></div>
                        <div class="col s12 m6 l3"><input className='white-text'
                            type="text"
                            placeholder='Debe o Haber'
                            onChange={handleChange}
                            value={debehaber}
                            name="debehaber"
                        /></div>
                        <div class="col s12 m6 l3"><input className='white-text'
                            type="text"
                            placeholder='Tipo de Cuenta'
                            onChange={handleChange}
                            value={cuenta}
                            name="cuenta"
                        /></div>
                        <div class="col s12 m6 l3"><input className='white-text'
                            type="number"
                            placeholder='Ingresar monto'
                            onChange={handleChange}
                            value={monto}
                            name="monto"
                        /></div>
                    </div>

                    <button onClick={handleSave} className='btn blue' >Guardar</button>
                </div>
            )
            }
        </div>
    )
}


export default FormAdd