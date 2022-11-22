// id:"vwevuiejrbveuv1111635465e"
// fecha:"2019-11-11" (de registro)
// fecha: "2019-11-11" (cuando sucedio el evento)
// debe/haber:"Debe"
// cuenta:"Caja"
// monto:"1000"

import { async } from "@firebase/util";
import { useState } from "react";
import { db } from "../firebase/config_firebase";
import types from "../types/types";



export const crearRegistro = (fecha, debehaber, cuenta, monto) => {

    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const month = (new Date()).getMonth() + 1;

        const datos = {
            fecha_registro: new Date().getUTCFullYear() + "-" + month + "-" + new Date().getUTCDate(),
            fecha: fecha,
            debehaber: debehaber,
            cuenta: cuenta,
            monto: monto,
        };

        const referencia = await db.collection(`${uid}/registro/libmayor`).add(datos);

        const id = await referencia.id
        const newData = {
            ...datos,
            id
        }

        dispatch(crear(newData));
    }
    // return async (dispatch, getState) => { 
    //     const {uid} = getState().auth;
    //     const newRegistro = {
    //         fecha: new Date().getTime(),
    //         debe: "Debe",
    //         cuenta: "Caja",
    //         monto: 1000
    //     }
    //     const doc = await db.collection(`${uid}/registro/registros`).add(newRegistro);
    //     console.log(doc);
    // }
}

export const leerRegistros = (data) => {
    return {
        type: types.registroRead,
        payload: data
    }
}

export const crear = (data) => {
    return {
        types: types.registroAdd,
        payload: data
    }
}

export const borrarRegistro = (id) => {
    
    return async (dispatch, getState) => {
        const {uid} = getState().auth
        await db.doc(`${uid}/registro/libmayor/${id}`).delete();
        dispatch(borrar(id));
    } 
    }

export const borrar = (id) => {
    return {
        type: types.registroDelete,
        payload: id
    }
}

export const limpirar = (id) => {
    return {
        type: types.registroClean,
    }
}