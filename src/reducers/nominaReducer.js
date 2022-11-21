// id:"vwevuiejrbveuv1111635465e"
// fecha:"2019-11-11" (de registro)
// fecha: "2019-11-11" (cuando sucedio el evento)
// debe/haber:"Debe"
// cuenta:"Caja"
// monto:"1000"

import types from "../types/types";


export const nominaReducer = (state = {}, action) => {

    switch (action.type) {
        case types.registroAdd:
            return {}; 

        default:
            return state;
    }
}