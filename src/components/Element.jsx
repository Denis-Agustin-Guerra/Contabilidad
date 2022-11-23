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
    let montoDebe = 0;
    let montoHaber = 0;
    const dispatch = useDispatch();

    const handleDelete = () => {

        dispatch(borrarRegistro(id))

    }

    const handleDebe = (debehaber, monto) => {
        // console.log("debehaber: ",debehaber);
        // console.log("monto: ",monto);
        if (debehaber === 'Debe') {
            montoDebe = monto;
        } else {
            montoDebe = 0;
        }
        // console.log(montoDebe)
        return montoDebe;
    }

    const handleHaber = (debehaber, monto) => {
        // console.log("debehaber: ",debehaber);
        // console.log("monto: ",monto);
        if (debehaber === 'Haber') {
            montoHaber = monto;
        } else {
            montoHaber = 0;
        }
        // console.log(montoDebe)
        return montoHaber;
    }


    return (
        <tr className='overFlow'>
            <td className='width-th'>{fecha}</td>
            <td className='width-cu'>{cuenta}</td>
            <td className='width-th'>${handleDebe(debehaber, monto)}</td>
            <td className='width-th'>${handleHaber(debehaber, monto)}</td>
            <td className='width-th'>
                {/* <button className="btn-small blue darken-2"><i className="material-icons">edit</i></button> */}
                <button onClick={() => {
                    Swal.fire({
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
                    })
                }
                } className="btn-small red darken-2"><i className="material-icons">delete_forever</i></button>
            </td>
        </tr >
    )
}

export default Element