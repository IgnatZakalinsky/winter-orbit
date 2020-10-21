import React, {useState} from 'react'
import s from './Account.module.css'
import Profile from './profile/Profile'
import Courses from './courses/Courses'

type AccountPropsType = {}

const Account: React.FC<AccountPropsType> = ({}) => {
    const [item, setItem] = useState<'profile' | 'courses'>('profile')

    return (
        <div className={s.account}>
            <div className={s.menu}>
                <div onClick={() => setItem('profile')} className={item === 'profile' ? s.checked : ''}>
                    Личные данные
                </div>
                <div onClick={() => setItem('courses')} className={item === 'courses' ? s.checked : ''}>
                    Ваши курсы
                </div>

            </div>

            <div className={s.checkedBlock}>
                {item === 'profile'
                    ? <Profile/>
                    : <Courses/>
                }
            </div>
        </div>
    )
}

export default Account
