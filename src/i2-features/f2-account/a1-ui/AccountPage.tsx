import React, {useEffect, useState} from 'react'
import Account from './Account'
import {useSelector} from 'react-redux'
import {AppStoreType} from '../../../i1-main/m2-bll/store'

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

}

const AccountPage: React.FC<AccountPagePropsType> = () => {
    const {data} = useSelector((store: AppStoreType) => store.app)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        // axios.get<GetProfilesRequestType>('http://127.0.0.1:8000/users_profiles/')
        //     .then(res => {
        //         console.log('profiles: ', res.data)
        //         setProfiles(res.data.results)
        //     })
        //     .catch(e => setError('error connection: ' + JSON.stringify({...e})))
    }, [])

    return (
        <>
            {error}
            <Account profile={data}/>
        </>
    )
}

export default AccountPage
