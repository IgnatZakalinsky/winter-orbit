import React from 'react'
import {Redirect} from 'react-router-dom'

type ProfilePropsType = {

}

const Profile: React.FC<ProfilePropsType> = ({}) => {

    return (
        <div>
            <div>имя пользователя</div>

            <div>сменить пароль</div>
        </div>
    )
}

export default Profile
