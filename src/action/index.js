import db, { auth, provider, storage} from "../firebase";
import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES } from "./actionType";

export const setUser = (payload) => ({
	type: SET_USER,
	user: payload,
});


export function signInAPI() {
	return (dispatch) => {
		auth.signInWithPopup(provider)
			.then((payload) => dispatch(setUser(payload.user)))
			.catch((err) => alert(err.message));
	};
}
export function getUserAuth() {
	return (dispatch) => {
		auth.onAuthStateChanged(async (user) => {
			if(user) {
				dispatch(setUser(user));
			}
	});
	};
}
export function signOutAPI() {
	return (dispatch) => {
		auth.signOut()
		.then(() =>
			dispatch(setUser(null)))
		.catch((error) =>
			console.log(error.message));
	};
}

