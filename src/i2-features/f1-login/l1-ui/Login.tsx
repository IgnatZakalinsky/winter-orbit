import React, {ChangeEvent, useState} from 'react'
import s from './Login.module.css'
import {StatusType} from "./LoginPage";

type LoginPropsType = {
    status: StatusType
    setStatus: (status: StatusType) => void
    send: (login: string, pass: string) => void
}

const Login: React.FC<LoginPropsType> = ({status, setStatus, send}) => {
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
                <img src={''} alt={'logo'}/>
            </div>

            <div className={s.form}>
                <div className={s.item}>
                    test - ok, else - error, result: {status}
                </div>

                <div className={s.item}>
                    <input
                        value={login}
                        onChange={onChangeLogin}
                    />
                </div>
                <div className={s.item}>
                    <input
                        type='password'
                        value={pass}
                        onChange={onChangePass}
                    />
                </div>

                <div className={s.item}>
                    <button
                        onClick={sendCallback}
                    >
                        авторизация
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
