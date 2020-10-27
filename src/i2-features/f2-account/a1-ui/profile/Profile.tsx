import React from 'react'
import {ProfileType} from '../AccountPage'
import {UserType} from '../../../f1-login/l1-ui/LoginPage'

type ProfilePropsType = {
    profile: ProfileType | undefined
    user: UserType | null
}

const Profile: React.FC<ProfilePropsType> = ({profile, user}) => {
    const name = user ? user.username : 'noname'
    const avatar = profile ? profile.profile_image : ''

    return (
        <div>
            <img src={avatar} alt={'avatar'}/>

            <div>{name}</div>

            <div>сменить пароль</div>
        </div>
    )
}

export default Profile
