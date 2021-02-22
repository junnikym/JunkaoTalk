
// < Actions >
// --------------------------------------------------

const ADD_LIST = "ADD_LIST";

// < Actions Creators >
// --------------------------------------------------

function addList(data) {
	return {
		type: ADD_LIST,
		data
	};
}

// < API Actions >
// --------------------------------------------------

function getGrouList(email, password) {
	return dispatch => {
		fetch("/api/chat/group/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email,
				password
			})
		})
		.then(response => response.json())
		.then(json => {
			if (json.data) {
				dispatch(addList(data));
			}
		})
		.catch(err => console.log(err));
	};
}

// < Initial State >
// --------------------------------------------------

const initState = {
	list: []
};

// < Reducer >
// --------------------------------------------------

function reducer(state = initState, action) {
	switch(action.type) {
		case ADD_LIST:
			return applyList(state, action);
		default:
			return state;
	}
}

// < Reducer Functions >
// --------------------------------------------------

function applyList(state, action) {
	const { result_set } = action;

	return {
		...state,
		list: result_set
	}
}

// < Exports >
// --------------------------------------------------

const actionCreators = {
	defaultLogin,
};

export { actionCreators };

export default reducer;
