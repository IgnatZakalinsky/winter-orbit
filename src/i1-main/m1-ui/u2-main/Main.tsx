import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {useSelector} from 'react-redux'
import s from './Main.module.css'
import {AppStoreType} from '../../m2-bll/store'
import Header from '../u3-header/Header'
import Footer from '../u4-footer/Footer'
import CoursesPage from '../../../i2-features/f3-courses-page/c1-ui/CoursesPage'
import Course from '../../../i2-features/f4-course/c1-ui/Course'
import LoginRedirect from '../u5-login-redirect/LoginRedirect'
import LoginPage from '../../../i2-features/f1-login/l1-ui/LoginPage'
import AccountPage from '../../../i2-features/f2-account/a1-ui/AccountPage'
import Mail from '../../../i2-features/f5-mail/Mail'
import Forgot from '../../../i2-features/f6-forgot/f1-ui/Forgot'

export const PATH = {
    HOME: '/',
    LOGIN: '/login',
    FORGOT: '/forgot',
    ACCOUNT: '/account',
    COURSES: '/courses',
    MAIL: '/mail',

}

const Main = () => {
    const {isAuth} = useSelector(((state: AppStoreType) => state.app))

    return (
        <div className={s.main}>
            <div>
                <Header isAuth={isAuth}/>

                <Switch>
                    <Route path={PATH.HOME} exact render={() => <Redirect to={PATH.LOGIN}/>}/>

                    <Route path={PATH.LOGIN} exact render={() => <LoginPage/>}/>
                    <Route path={PATH.FORGOT} exact render={() => <Forgot/>}/>
                    <Route path={PATH.FORGOT + '/:token'} exact render={() => <Forgot/>}/>

                    <Route
                        path={PATH.ACCOUNT}
                        exact
                        render={() => <LoginRedirect isAuth={isAuth}><AccountPage/></LoginRedirect>}
                    />

                    <Route path={PATH.COURSES} exact render={() => <CoursesPage/>}/>
                    <Route
                        path={PATH.COURSES + '/:id'}
                        exact
                        render={() => <LoginRedirect isAuth={isAuth}><Course/></LoginRedirect>}
                    />
                    <Route path={PATH.MAIL} exact render={() => <Mail/>}/>

                    <Route render={() => <div>404</div>}/>
                </Switch>
            </div>

            <Footer/>
        </div>
    )
}

export default Main
