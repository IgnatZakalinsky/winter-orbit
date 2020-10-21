import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../../i1-main/m1-ui/u2-main/Main'

const courses = [
    {_id: 1, name: 'Python junior'},
    {_id: 2, name: 'Python junior'},
    {_id: 3, name: 'Python junior'},
]

type CoursesPropsType = {}

const Courses: React.FC<CoursesPropsType> = ({}) => {

    const mappedCourses = courses.map(c => (
        <div key={c._id}>
            <NavLink to={PATH.COURSES + '/' + c._id}>
                <button>{c.name}</button>
            </NavLink>
        </div>
    ))

    return (
        <div>
            {mappedCourses}
            // куда переход?
        </div>
    )
}

export default Courses
