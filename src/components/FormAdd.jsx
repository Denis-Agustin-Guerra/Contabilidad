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

                    <input
                        type="text"
                        placeholder='Ingresar fecha de operacion (dd/mm/aaaa)'
                        onChange={handleChange}
                        value={fecha}
                        name="fecha"
                    />
                    <input
                        type="text"
                        placeholder='Debe o Haber'
                        onChange={handleChange}
                        value={debehaber}
                        name="debehaber"
                    />
                    <input
                        type="text"
                        placeholder='Tipo de Cuenta'
                        onChange={handleChange}
                        value={cuenta}
                        name="cuenta"
                    />
                    <input
                        type="number"
                        placeholder='Ingresar monto'
                        onChange={handleChange}
                        value={monto}
                        name="monto"
                    />
                    <button onClick={handleSave} className='btn blue' >Guardar</button>
                </div>
            )
            }
        </div>
    )
}


export default FormAdd