// id:"vwevuiejrbveuv1111635465e"
// fecha:"2019-11-11" (de registro)
// fecha: "2019-11-11" (cuando sucedio el evento)
// debe/haber:"Debe"
// cuenta:"Caja"
// monto:"1000"

import { db } from "../firebase/config_firebase";



export const crearRegistro= (fecha, debehaber, cuenta, monto) => {

    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        const month = (new Date()).getMonth() + 1;

        const datos = {
            fecha_registro: new Date().getUTCDate() + "/" + month + "/" + new Date().getUTCFullYear(),
            fecha: fecha,
            debehaber: debehaber,
            cuenta: cuenta,
            monto: monto,
        };

        const referencia = await db.collection(`${uid}/registro/libmayor`).add(datos);
        console.log(referencia);
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
