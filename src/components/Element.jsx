import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { borrarRegistro } from '../actions/nomina';
import { db } from '../firebase/config_firebase';
import './styles_component.css'
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

const Element = ({ data }) => {
    // CommonJS
    const Swal = require('sweetalert2')
    const { fecha, debehaber, cuenta, monto, id } = data;
    const dispatch = useDispatch();

    const handleDelete = () => {

        dispatch(borrarRegistro(id))

    }
    return (
        <tr className='overFlow'>
            <td>{fecha}</td>
            <td>{debehaber}</td>
            <td>{cuenta}</td>
            <td>${monto}</td>
            <td>
                {/* <button className="btn-small blue darken-2"><i className="material-icons">edit</i></button> */}
                <button onClick={ () => {Swal.fire({
                        title: '¿Seguro que desea borrar este registro?',
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: 'Confirmar',
                        denyButtonText: `Cancelar`,
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            Swal.fire('Borrado!', '', 'Confirmar')
                            handleDelete()
                        } else if (result.isDenied) {
                            Swal.fire('Cancelado con exito', '', 'salir')
                        }
                    }) }
                    } className="btn-small red darken-2"><i className="material-icons">delete_forever</i></button>
        </td>
        </tr >
    )
}

export default Element