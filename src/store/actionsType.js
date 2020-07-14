function createType(type, payload) {
	return {
		type,
		payload
	};
}

const auth = {
	GET_AUTH: 'GET_AUTH',
	SET_AUTH: 'SET_AUTH'
};

const post = {
	GET_ALL_POSTS: 'GET_ALL_POSTS',
	GET_POST_DETAILS: 'GET_POST_DETAILS',
	ADD_POST: 'ADD_POST'
};

const comment = {
	ADD_COMMENT: 'ADD_COMMENT'
};

export { createType };

// Export action types here
export { auth, post, comment };
