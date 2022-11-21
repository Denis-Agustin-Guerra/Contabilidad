import { firebase, googleAuthProvider } from '../firebase/config_firebase';
import types from '../types/types';



export const googleLogin = () => {
    return (dispatch) => {
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => { dispatch(login(user.uid, user.displayName)) });
    }
}

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => { 
                // console.log(user);
                dispatch(login(user.uid, user.displayName)) 
            });
    }
}


export const register = (username, password, email) => {
    return (dispatch) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            // .then((data) => console.log(data))
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: username });
                dispatch(login(user.uid, user.displayName))
            })
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

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch({
            type: types.logout
        })
    }
}

export default login