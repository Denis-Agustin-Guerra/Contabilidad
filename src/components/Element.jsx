import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { borrarRegistro } from '../actions/nomina';
import { db } from '../firebase/config_firebase';

const Element = ({ data }) => {
    const { fecha, debehaber, cuenta, monto, id } = data;
const dispatch = useDispatch();

const handleDelete = () => {
    
    dispatch(borrarRegistro(id))

}

    return (
        <tr>
            <td>{fecha}</td>
            <td>{debehaber}</td>
            <td>{cuenta}</td>
            <td>${monto}</td>
            <td>
                <button className="btn-small blue darken-2"><i className="material-icons">edit</i></button>
                <button onClick={handleDelete} className="btn-small red darken-2"><i className="material-icons">delete_forever</i></button>
            </td>
        </tr>
    )
}

export default Element