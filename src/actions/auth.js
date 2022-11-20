import types from '../types/types';
export const googleLogin = (id, username) => {
    return {
        type: types.login,
        pauload: {
            id,
            username
        }
    }
}
export default googleLogin