import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
const GET_MESSAGES = 'GET_MESSAGES';


const initialState = {
	greeting: ''
}

const getMessagesAction = (payload) => ({
	type: GET_MESSAGES,
	payload,
})

export const getMessagesAPI = () => async (dispatch) => {
   const getData = await fetch('http://localhost:3000/v1/greetings')
	 const resp = await getData.json()
	 dispatch(getMessagesAction(resp.messages))
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {

	case GET_MESSAGES:
		return { ...state, greeting: action.payload }

	default:
		return state
	}
}

export default function configureStore() {
	const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
	return store;
}
