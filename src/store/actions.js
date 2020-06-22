import {
    createType as _, 
    auth as authType
} from './actionsType.js';

import req from '@utils/request.js';

function getAuth () {
    return async (dispatch) => {
        const auth = await req.post('/auth');
        dispatch(_(authType.GET_AUTH, auth));
    };
}

export {getAuth};