const initState = {
	authError: null,
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case 'LOGIN_ERROR':
			return {
				...state,
				authError: 'Login Failed',
			};
		case 'LOGIN_SUCCESS':
			console.log('login success');
		default:
			return state;
	}
};

export default authReducer;
