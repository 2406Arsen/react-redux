import { ADD_COUNT } from './types'

const INITIAL_STATE = {
	count: 0,
	name: 'name',
}

const counterReducer = (state = INITIAL_STATE, action: { type: string; payload: number }) => {

	switch (action.type) {
		case ADD_COUNT:
			return {
				...state,
				count: state.count + action.payload,
			}

		default:
			return state
	}
}
export default counterReducer
