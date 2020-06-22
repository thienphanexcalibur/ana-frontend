import {endpoint} from '@constants';

function f (path, options) {
    const _e = endpoint;
    return fetch(`${_e}${path}`, options).then(res => res.json());
}

export default {
    get(path) {
        return f(path, {
            method: 'GET'
        })
    },

    post(path, payload) {
        const options = {
            body: payload,
            credentials: 'include',
            method: 'POST'
        }
        
        if (!payload) {
            delete options.body
        }

        return f(path, options)
    },

    put(path, payload) {
        return f(path, {
            body: payload,
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT'
        })
    },

    delete(path) {
        return f(path, {
            method: 'DELETE'
        });
    }
}