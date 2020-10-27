import React, {useState} from 'react'
import s from './Account.module.css'
import Profile from './profile/Profile'
import Courses from './courses/Courses'
import {ProfileType} from './AccountPage'
import {UserType} from '../../f1-login/l1-ui/LoginPage'

type AccountPropsType = {
    profile: ProfileType | undefined
    user: UserType | null
}

const Account: React.FC<AccountPropsType> = ({profile, user}) => {
    const [item, setItem] = useState<'profile' | 'courses'>('profile')

    const courseIds = profile ? profile.user_courses : []

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
                    ? <Profile user={user} profile={profile}/>
                    : <Courses courseIds={courseIds}/>
                }
            </div>
        </div>
    )
}

export default Account
