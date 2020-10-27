import React, {useEffect, useState} from 'react'
import Account from './Account'
import axios from 'axios'
import {UserType} from '../../f1-login/l1-ui/LoginPage'

export type GetProfilesRequestType = {
    count: number
    next: any // any
    previous: any // any
    results: ProfileType[]
}
export type ProfileType = {
    id: number
    profile_image: any // any
    user_courses: any[]  // any
    user: number
    // email: string
    // id: number
    // is_superuser: boolean
    // password: string
    // username: string
}

type AccountPagePropsType = {
    user: UserType | null
}

const AccountPage: React.FC<AccountPagePropsType> = ({user}) => {
    const [profiles, setProfiles] = useState<ProfileType[]>([])
    const [error, setError] = useState<string>('')

    useEffect(() => {
        axios.get<GetProfilesRequestType>('http://127.0.0.1:8000/users_profiles/')
            .then(res => {
                console.log('profiles: ', res.data)
                setProfiles(res.data.results)
            })
            .catch(e => setError('error connection: ' + JSON.stringify({...e})))
    }, [])

    const profile = profiles.find(p => user && p.user === user.id)

    return (
        <>
            {error}
            <Account profile={profile} user={user}/>
        </>
    )
}

export default AccountPage
