import { async } from "@firebase/util"
import { db } from "../firebase/config_firebase"

export const loadData = async (uid) => {
    const response = await db.collection(`${uid}/registro/libmayor`).get()
    const data = []

    
    response.forEach((registro) => {
        const registroData = (registro.data());
        data.push({
            id: registro.id,
            ...registroData
        })
    })
    return data



    // db.collection(`${uid}/registro/libmayor`).onSnapshot((snap) => {
    //     console.log(snap);
    // })
}