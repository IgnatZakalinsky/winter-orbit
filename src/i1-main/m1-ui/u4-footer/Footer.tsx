import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.start}>
                <div className={s.item}>
                    <img src={''} alt={'logo'}/>
                </div>


                <div className={s.item}>
                    <div>
                        Контакты
                    </div>

                    <div>по учебной части</div>
                    <div>сотрудничество</div>
                </div>

                <div className={s.item}>
                    <div>
                        Курсы
                    </div>

                    <div>ПитонНео</div>
                </div>
            </div>

            <div className={s.end}>
                <div>contacts</div>
            </div>
        </div>
    )
}

export default Footer
