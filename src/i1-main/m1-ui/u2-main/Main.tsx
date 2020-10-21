import React, {useState} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from '../../../i2-features/f1-login/l1-ui/Login'
import Header from '../u3-header/Header'
import Footer from '../u4-footer/Footer'
import s from './Main.module.css'
import Account from '../../../i2-features/f2-account/a1-ui/Account'
import CoursesPage from '../../../i2-features/f3-courses-page/c1-ui/CoursesPage'
import Course from '../../../i2-features/f4-course/c1-ui/Course'
import LoginRedirect from '../u4-login-redirect/LoginRedirect'

export const PATH = {
    HOME: '/',
    LOGIN: '/login',
    ACCOUNT: '/account',
    COURSES: '/courses',

}

const Main = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)

    return (
        <div className={s.main}>
            <div>
                <Header isAuth={isAuth}/>

                <Switch>
                    <Route path={PATH.HOME} exact render={() => <Redirect to={PATH.LOGIN}/>}/>

                    <Route path={PATH.LOGIN} exact render={() => <Login setIsAuth={setIsAuth}/>}/>
                    <Route
                        path={PATH.ACCOUNT}
                        exact
                        render={() => <LoginRedirect isAuth={isAuth}><Account/></LoginRedirect>}
                    />

                    <Route
                        path={PATH.COURSES}
                        exact
                        render={() => <LoginRedirect isAuth={isAuth}><CoursesPage/></LoginRedirect>}
                    />
                    <Route
                        path={PATH.COURSES + '/:id'}
                        exact
                        render={() => <LoginRedirect isAuth={isAuth}><Course/></LoginRedirect>}
                    />

                    <Route render={() => <div>404</div>}/>
                </Switch>
            </div>

            <Footer/>
        </div>
    )
}

export default Main
