import thunkMiddleware from 'redux-thunk'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {appReducer} from './appReducer'
import {loginReducer} from '../../i2-features/f1-login/l2-bll/loginReducer'

const reducers = combineReducers({
    app: appReducer,
    login: loginReducer,

})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for developers
