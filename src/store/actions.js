import {
    createType as _, 
    auth as authType
} from './actionsType.js';

import req from '@utils/request.js';

function getAuth () {
    return async (dispatch) => {
        let auth;
        try {
            auth = await req.post('/auth');
        } catch(e) {
            auth = null;
        }
        dispatch(_(authType.GET_AUTH, auth));
    };
}

export {getAuth};