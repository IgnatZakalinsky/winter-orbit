import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from '../../../i1-main/m2-bll/store'
import {PATH} from '../../../i1-main/m1-ui/u2-main/Main'
import {LoginActions, signIn} from '../l2-bll/loginReducer'
import Login from './Login'
import {StatusType} from '../../../i0-common/c1-orbitForm/OrbitForm'

const LoginPage = () => {
    const {loading, success, error} = useSelector((state: AppStoreType) => state.login)
    const [status, setStatus] = useState<StatusType>('default')
    const [redirect, setRedirect] = useState<boolean>(false)

    useEffect(() => {
        if (loading && status !== 'loading') setStatus('loading')
        if (error && status !== error) setStatus('error')

        if (success && status !== 'ok') {
            setStatus('ok')
            setTimeout(() => {
                setRedirect(true)
            }, 500)
        }
    }, [loading, success, error, setStatus, status])

    const dispatch = useDispatch()
    const send = (login: string, pass: string) => {
        dispatch(signIn(login, pass))
    }
    const setStatusCallback = (s: StatusType) => {
        setStatus(s)
        dispatch(LoginActions.setError(''))
    }

    if (redirect) return <Redirect to={PATH.ACCOUNT}/>

    return (
        <Login send={send} setStatus={setStatusCallback} status={status} error={error}/>
    )
}

export default LoginPage
