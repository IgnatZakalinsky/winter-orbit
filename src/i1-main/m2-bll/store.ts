import thunkMiddleware from 'redux-thunk'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {appReducer} from './appReducer';

const reducers = combineReducers({
    app: appReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for developers