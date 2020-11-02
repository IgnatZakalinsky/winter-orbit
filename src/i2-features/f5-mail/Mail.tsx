import React from 'react'
import s from './Mail.module.css'

type LoginPropsType = {

}

const Mail: React.FC<LoginPropsType> = () => {
    // const [login, setLogin] = useState<string>('me@gmail.com')

    // const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    //     setLogin(e.currentTarget.value)
    //     setStatus('default')
    // }

    const sendCallback = () => {}

    return (
        <div className={s.mail}>
            <div className={s.logo}>
                <img src={''} alt={'logo'}/>
            </div>

            <div className={s.form}>
                <div className={s.item}>

                </div>

                <div className={s.item}>
                    <input

                    />
                </div>
                <div className={s.item}>
                    <textarea

                    />
                </div>

                <div className={s.item}>
                    <button
                        onClick={sendCallback}
                    >
                        отправить
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Mail
