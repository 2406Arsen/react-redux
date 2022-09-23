import { ADD_COUNT } from './counter/types'

export const addCountAction = (count: number) => ({
	type: ADD_COUNT,
	payload: count,
})
