import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import {PATH} from '../../../i1-main/m1-ui/u2-main/Main'
import Login from './Login'
import axios from 'axios'

export type StatusType = 'default' | 'loading' | 'error login/pass' | 'ok'
export type GetUsersRequestType = {
    count: number
    next: any // any
    previous: any // any
    results: UserType[]
}
export type UserType = {
    email: string
    id: number
    is_superuser: boolean
    password: string
    username: string
}

type LoginPagePropsType = {
    setIsAuth: (isAuth: boolean) => void
    setUser: (user: UserType | null) => void
}

const LoginPage: React.FC<LoginPagePropsType> = ({setIsAuth, setUser}) => {
    const [status, setStatus] = useState<StatusType>('default')
    const [redirect, setRedirect] = useState<boolean>(false)
    const [users, setUsers] = useState<UserType[]>([])
    const [error, setError] = useState<string>('')

    useEffect(() => {
        axios.get<GetUsersRequestType>('http://127.0.0.1:8000/users/')
            .then(res => {
                console.log('users: ', res.data)
                setUsers(res.data.results)
            })
            .catch(e => setError('error connection: ' + JSON.stringify({...e})))
    }, [])

    const send = (login: string, pass: string) => {
        setStatus('loading')

        const user = users.find(u => u.email === login && u.password === pass)

        setTimeout(() => {
            if (user) {
                setStatus('ok')
                setUser(user)
                setIsAuth(true)

                setTimeout(() => {
                    setRedirect(true)
                }, 500)
            } else {
                setStatus('error login/pass')
            }
        }, 1500)
    }

    if (redirect) return <Redirect to={PATH.ACCOUNT}/>

    return (
        <>
            {error}
            <Login send={send} setStatus={setStatus} status={status}/>
        </>
    )
}

export default LoginPage
