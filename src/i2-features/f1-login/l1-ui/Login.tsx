import React, {useState, ChangeEvent} from 'react'
import {Redirect} from 'react-router-dom'
import s from './Login.module.css'
import {PATH} from '../../../i1-main/m1-ui/u2-main/Main'

type LoginPropsType = {
    setIsAuth: (isAuth: boolean) => void
}

const Login: React.FC<LoginPropsType> = ({setIsAuth}) => {
    const [status, setStatus] = useState<'default' | 'loading' | 'error' | 'ok'>('default')
    const [login, setLogin] = useState<string>('test')
    const [redirect, setRedirect] = useState<boolean>(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)
        setStatus('default')
    }
    const send = () => {
        setStatus('loading')

        setTimeout(() => {
            if (login === 'test') {
                setStatus('ok')
                setIsAuth(true)

                setTimeout(() => {
                    setRedirect(true)
                }, 1500)
            } else {
                setStatus('error')
            }
        }, 1500)
    }

    if (redirect) return <Redirect to={PATH.ACCOUNT}/>

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
                        onChange={onChange}
                    />
                </div>
                <div className={s.item}>
                    <input type='password'/>
                </div>

                <div className={s.item}>
                    <button
                        onClick={send}
                    >
                        авторизация
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
