import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../i1-main/m1-ui/u2-main/Main'
import s from './CoursesPage.module.css'

const courses = [
    {_id: 1, name: 'PythonNEO', about: 'something about'},
    {_id: 2, name: 'PythonNEO', about: 'something about'},
    {_id: 3, name: 'PythonNEO', about: 'something about'},
    {_id: 4, name: 'PythonNEO', about: 'something about'},
    {_id: 5, name: 'PythonNEO', about: 'something about'},
    {_id: 6, name: 'PythonNEO', about: 'something about'},
]

type CoursesPagePropsType = {}

const CoursesPage: React.FC<CoursesPagePropsType> = ({}) => {
    const mappedCourses = courses.map(c => (
        <div key={c._id} className={s.course}>
            <div className={s.img}>
                img
            </div>

            <div className={s.name}>
                {c.name}
            </div>

            <div className={s.aboutBlock}>
                <div className={s.about}>{c.about}</div>

                <NavLink to={PATH.COURSES + '/' + c._id}>
                    <button>перейти к курсу</button>
                </NavLink>
            </div>
        </div>
    ))

    return (
        <div className={s.page}>
            {mappedCourses}
        </div>
    )
}

export default CoursesPage
