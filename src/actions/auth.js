import { firebase, googleAuthProvider } from '../firebase/config_firebase';
import types from '../types/types';

export const googleLogin = () => {
    return (dispatch) => {
        firebase
        .auth()
        .signInWithPopup(googleAuthProvider)
        .then(({user})=> {dispatch(login(user.uid, user.displayName))});
    }
}

export const login = (uid, displayname) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayname
        }
    }
}
export default login