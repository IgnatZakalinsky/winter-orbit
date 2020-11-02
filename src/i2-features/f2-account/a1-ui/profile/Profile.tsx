import React from 'react'
import {UserType} from '../Account'

type ProfilePropsType = {
    profile: UserType | undefined
}

const Profile: React.FC<ProfilePropsType> = ({profile}) => {
    const name = profile ? profile.username : 'noname'
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
