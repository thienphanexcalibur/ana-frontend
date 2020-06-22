function createType (type, payload){
    return {
        type,
        payload
    }
}

const auth = {
    'GET_AUTH': 'GET_AUTH'
}


const post = {
    'GET_POST': 'GET_POST'
}

export {auth, post, createType};