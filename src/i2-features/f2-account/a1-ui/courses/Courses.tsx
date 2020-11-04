import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../../i1-main/m1-ui/u2-main/Main'
import axios from 'axios'
import s from './Courses.module.css'

// const coursesTest = [
//     {id: 1, title: 'Python junior'},
//     {id: 2, title: 'Python junior'},
//     {id: 3, title: 'Python junior'},
// ]

export type GetCoursesRequestType = {
    count: number
    next: any // any
    previous: any // any
    results: CourseType[]
}
export type CourseType = {
    id: string
    title: string
    description: string
    content: string
}

type CoursesPropsType = {
    courseIds: string[]
}

const Courses: React.FC<CoursesPropsType> = ({courseIds}) => {
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

    const userCourses = courses.filter(c => courseIds.find(i => i === c.id))

    // const mappedCourses = coursesTest.map(c => (
    //     <div key={c.id}>
    //         <NavLink to={PATH.COURSES + '/' + c.id}>
    //             <button>{c.title}</button>
    //         </NavLink>
    //     </div>
    // ))
    const mappedCourses = userCourses.map(c => (
        <div key={c.id}>
            <NavLink to={PATH.COURSES + '/' + c.id}>
                <button className={s.item}>{c.title}</button>
            </NavLink>
        </div>
    ))

    return (
        <div className={s.courses}>
            {error}
            {mappedCourses}
        </div>
    )
}

export default Courses
