// id:"vwevuiejrbveuv1111635465e"
// fecha:"2019-11-11" (de registro)
// fecha: "2019-11-11" (cuando sucedio el evento)
// debe/haber:"Debe"
// cuenta:"Caja"
// monto:"1000"

import types from "../types/types";

const initialState = {
    data: [],
}

export const nominaReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.registroAdd:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case types.registroRead:
            return {
                ...state,
                data: action.payload
            };
        case types.registroDelete:
            return {
                ...state,
                data: state.data.filter(data => data.id !== action.payload)
            };
        case types.registroClean:
            return {
                ...state,
                data: []
            };

        default:
            return state;
    }
}