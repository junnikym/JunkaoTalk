
// < Actions >
// --------------------------------------------------

const SAVE_TOKEN 	= "SAVE_TOKEN";
const LOGOUT 		= "LOGOUT";
const FRIEND 		= "FRIEND";
const UNFRIEND 		= "UNFRIEND";
const PASS_DATA		= "PASS_DATA";

// < Actions Creators >
// --------------------------------------------------

function saveToken(token) {
	return {
		type: SAVE_TOKEN,
		token
	};
}

function logout() {
	return {
		type: LOGOUT
	};
}

function setFriend(target_pk) {
	return {
		type: FRIEND,
		target_pk
	}
}

function setUnfriend(target_pk) {
	return {
		type: UNFRIEND,
		target_pk
	}
}

function passData(result_set) {
	console.log(result_set);

	return {
		type: PASS_DATA,
		result_set 
	}
}

// < API Actions >
// --------------------------------------------------

function defaultLogin(email, password) {
	return dispatch => {
		fetch("/rest-auth/login/", {
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
			if (json.token) {
				dispatch(saveToken(json.token));
			}
		})
		.catch(err => console.log(err));
	};
}

function createAccount(email, pw, confirm_pw, img, alias) {
	return dispatch => {
		
		fetch("/rest-auth/registration/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"email"		: email,
				"password1"	: pw,
				"password2"	: confirm_pw,
				// profile_img	: img,
				// "alias"		: alias
			})
		})
		.then(response => response.json())
		.then(json => {
			if (json.token) {
				dispatch(saveToken(json.token));
			}
		})
		.catch(err => console.log(err));
	};
}

function getFriendList() {
	return (dispatch, getState) => {
		const { account: { token } } = getState();

		fetch(`/api/account/friend/`, {
			method: "GET",
			headers: {
				Authorization: `JWT ${token}`,
				"Content-Type": "application/json"
			}
		})
		.then(response => {
			if (response.status === 401) {
				dispatch(logout());
			}
			return response.json();
		})
		.then(json => {
			dispatch(passData(json));
		})
		.catch(err => console.log(err));
	}
}

function friend(target_pk) {
	return (dispatch, getState) => {
		const { account: { token } } = getState();

		fetch(`/api/account/${target_pk}/friend/`, {
			method: "POST",
			headers: {
				Authorization: `JWT ${token}`,
				"Content-Type": "application/json"
			}
		})
		.then(response => {
			if (response.status === 401) {
				dispatch(logout());
			}
			else if (response.ok) {
				dispatch(setFriend(target_pk));
			}
		});
	};
}

function unfriend(target_pk) {
	return (dispatch, getState) => {
		const { account: { token } } = getState();

		fetch(`/api/account/${target_pk}/unfriend/`, {
			method: "POST",
			headers: {
				Authorization: `JWT ${token}`,
				"Content-Type": "application/json"
			}
		})
		.then(response => {
			if (response.status === 401) {
				dispatch(logout());
			}
			else if (response.ok) {
				dispatch(setUnfriend(target_pk));
			}
		});
	};
}

function searchAccount(query) {
	return (dispatch, getState) => {
		const { account: { token } } = getState();

		fetch(`/api/account/search?query=${query}`, {
			method: "GET",
			headers: {
				Authorization: `JWT ${token}`,
				"Content-Type": "application/json"
			}
		})
		.then(response => {
			if (response.status === 401) {
				dispatch(logout());
			}
			return response.json();
		})
		.then(json => {
			dispatch(passData(json));
		})
	}
}

// < Initial State >
// --------------------------------------------------

const initState = {
	isLoggedIn: localStorage.getItem("jwt") ? true : false,
	token: localStorage.getItem("jwt")
};

// < Reducer >
// --------------------------------------------------

function reducer(state = initState, action) {
	switch(action.type) {
		case SAVE_TOKEN:
			return applySetToken(state, action);
		case LOGOUT:
			return applyLogout(state, action);
		case FRIEND:
			return applyFriend(state, action);
		case UNFRIEND:
			return applyUnfriend(state, action);
		case PASS_DATA:
			return applyData(state, action);
		default:
			return state;
	}
}

// < Reducer Functions >
// --------------------------------------------------

function applySetToken(state, action) {
	const { token } = action;
	localStorage.setItem("jwt", token);

	return {
		...state,
		isLoggedIn	: true,
		token		: token
	};
}

function applyLogout(state, action) {
	localStorage.removeItem("jwt");

	return {
		isLoggedIn: false
	};
}

function applyFriend(state, action) {
	// const { target_pk } = action;
	// const { friend_list } = state;

	// const result = friend_list.map( elem => {
	// 	if (elem.pk === target_pk) {
	// 		return { ...user, following: true };
	// 	}

	// 	return user;
	// });

	return {
		...state,
	// 	userList: updatedUserList
	};
}

function applyUnfriend(state, action) {
	// const { target_pk } = action;
	// const { friend_list } = state;

	// const result = friend_list.map( elem => {
	// 	if (elem.pk === target_pk) {
	// 		return { ...user, following: true };
	// 	}

	// 	return user;
	// });

	return {
		...state,
	// 	userList: updatedUserList
	};
}

function applyData(state, action) {
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
	createAccount,
	logout,
	friend,
	unfriend,
	searchAccount,
	getFriendList
};

export { actionCreators };

export default reducer;
