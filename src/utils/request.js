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
        return f(path, {
            body: payload,
            method: 'POST'
        })
    },

    put(path, payload) {
        return f(path, {
            body: payload,
            method: 'PUT'
        })
    },

    delete(path) {
        return f(path, {
            method: 'DELETE'
        });
    }
}