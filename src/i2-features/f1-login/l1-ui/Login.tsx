import React, {ChangeEvent, useState} from 'react'
import s from './Login.module.css'
import {StatusType} from './LoginPage'
import axios from 'axios'
import logoDef from './login-def.png'

type LoginPropsType = {
    status: StatusType
    error: string
    setStatus: (status: StatusType) => void
    send: (login: string, pass: string) => void
}

const Login: React.FC<LoginPropsType> = ({status, error, setStatus, send}) => {
    const [login, setLogin] = useState<string>('me@gmail.com')
    const [pass, setPass] = useState<string>('y3jPqdFvNtB6Q96')

    const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)
        setStatus('default')
    }
    const onChangePass = (e: ChangeEvent<HTMLInputElement>) => {
        setPass(e.currentTarget.value)
        setStatus('default')
    }

    const sendCallback = () => send(login, pass)

    return (
        <div className={s.login}>
            <div className={s.logo + ' ' + s[status]}>
                <img src={logoDef} alt={'logo'} className={s.img}/>
            </div>

            <div className={s.form}>
                <div className={s.item}>
                    {error ? error : <br/>}
                </div>

                <div className={s.item}>
                    <input
                        className={s.input}
                        value={login}
                        onChange={onChangeLogin}
                    />
                </div>
                <div className={s.item}>
                    <input
                        className={s.input}
                        type='password'
                        value={pass}
                        onChange={onChangePass}
                    />
                </div>

                <div className={s.item}>
                    <button
                        className={s.button}
                        onClick={sendCallback}
                    >
                        авторизация
                    </button>

                    {/*<button*/}
                    {/*    onClick={() => {*/}
                    {/*        axios.post(*/}
                    {/*            'http://127.0.0.1:8000/search_userprofile',*/}
                    {/*            {*/}
                    {/*                // email: 'me@gmail.com',*/}
                    {/*                // password: 'y3jPqdFvNtB6Q96',*/}
                    {/*                // username: 'Me',*/}
                    {/*                username: 'me@gmail.com',*/}
                    {/*            }*/}
                    {/*            )*/}
                    {/*            .then(res => {*/}
                    {/*                console.log('users: ', res.data)*/}
                    {/*                // setUsers(res.data.results)*/}
                    {/*            })*/}
                    {/*            // .catch(e => setError('error connection: ' + JSON.stringify({...e})))*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    test request*/}
                    {/*</button>*/}

                </div>
            </div>
        </div>
    )
}

export default Login
