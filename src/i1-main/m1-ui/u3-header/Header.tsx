import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {PATH} from '../u2-main/Main'

type HeaderPropsType = {
    isAuth: boolean
}

const Header: React.FC<HeaderPropsType> = ({isAuth}) => {
    return (
        <div className={s.header}>
            <div className={s.start}>
                <div className={s.item}>
                    <NavLink to={PATH.ACCOUNT} activeClassName={s.active} className={s.link}>кабинет</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to={PATH.COURSES} activeClassName={s.active} className={s.link}>курсы</NavLink>
                </div>

                <div className={s.item}>почта</div>
            </div>

            <div className={s.center}>
                зимняя орбита
            </div>

            <div className={s.end}>
                <div>
                    contacts
                </div>

                {/*переделать*/}
                <div className={s.person}>
                    {!isAuth
                        ? <div>вход в орбиту</div>
                        : (
                            <div>
                                <div>добро пожаловать</div>
                                <span>ТЕСТ</span>
                            </div>
                        )
                    }

                    <img src={''} alt={'person'}/>
                </div>
            </div>
        </div>
    )
}

export default Header
