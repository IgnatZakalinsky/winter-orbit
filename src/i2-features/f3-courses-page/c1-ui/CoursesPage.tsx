import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../i1-main/m1-ui/u2-main/Main'
import s from './CoursesPage.module.css'
import axios from 'axios'
import {CourseType} from "../../f2-account/a2-bll/coursesReducer";
import { GetCoursesRequestType } from '../../f2-account/a3-dal/CoursesAPI'

// const testCourses: CourseType[] = [
//     {id: '1', title: 'PythonNEO', description: 'something about', content: ''},
//     {id: '2', title: 'PythonNEO', description: 'something about', content: ''},
//     {id: '3', title: 'PythonNEO', description: 'something about', content: ''},
//     {id: '4', title: 'PythonNEO', description: 'something about', content: ''},
//     {id: '5', title: 'PythonNEO', description: 'something about', content: ''},
//     {id: '6', title: 'PythonNEO', description: 'something about', content: ''},
// ]

type CoursesPagePropsType = {}

const CoursesPage: React.FC<CoursesPagePropsType> = ({}) => {
    const [courses, setCourses] = useState<CourseType[]>([])
    const [error, setError] = useState<string>('')

    useEffect(() => {
        axios.get<GetCoursesRequestType>('http://127.0.0.1:8000/courses/')
            .then(res => {
                console.log('users: ', res.data)
                setCourses(res.data.results)
            })
            .catch(e => setError('error connection: ' + JSON.stringify({...e})))
    }, [])

    const mappedCourses = courses.map(c => (
        <div key={c.id} className={s.course}>
            <div className={s.img}/>

            <div className={s.name}>
                {c.title}
            </div>

            <div className={s.aboutBlock}>
                <div className={s.about}>{c.description}</div>

                <NavLink to={PATH.COURSES + '/' + c.id}>
                    <button className={s.button}>перейти к курсу</button>
                </NavLink>
            </div>
        </div>
    ))

    return (
        <div className={s.page}>
            {error}
            {mappedCourses}
        </div>
    )
}

export default CoursesPage
