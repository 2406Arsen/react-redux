import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import counterReducer from '../features/counter/reducer'

const reducers = combineReducers({
	counterReducer,
})
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
