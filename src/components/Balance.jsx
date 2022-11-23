import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { borrarRegistro } from '../actions/nomina';
import { db } from '../firebase/config_firebase';
import './styles_component.css'
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

const Balance = ({ data }) => {
    // CommonJS
    const Swal = require('sweetalert2')
    const { fecha, debehaber, cuenta, monto } = data;
    let montoDebe = 0;
    let montoHaber = 0;
    const dispatch = useDispatch();

    const element = useSelector((state) => state.nomina.data)
    useEffect(() => {
        setData(element)
    }, [element])
    const [data2, setData] = useState(element)


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

    data2.forEach((el)=>{
        // console.log(el.debehaber)
        if (el.debehaber === 'Debe') {
            montoDebe = montoDebe + parseFloat(el.monto);
            // console.log(montoDebe);
        }else {
            montoHaber = montoHaber + parseFloat(el.monto);
            // console.log(montoHaber);
        }
        return montoDebe, montoHaber;
    })
    // {
    //     data2.map((elemento) => {
    //         console.log(elemento)
    //         return <Balance data={elemento} key={elemento.id} />
    //     })
    // }
    const balance = (montoDebe, montoHaber) => {
        if (montoDebe > montoHaber) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El balance no cuadra!',
            })
        } else if (montoDebe < montoHaber) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El balance no cuadra!',
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Balance cuadrado!',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    return (
        <tr className='overFlow'>
            <th className='width-th none'></th>
            <th className='width-cu'>Total</th>
            <th className='width-th'>{montoDebe}</th>
            <th className='width-th'>{montoHaber}</th>
            <th className='width-th none'>{balance(montoDebe, montoHaber)}</th>
        </tr >
    )
}

export default Balance