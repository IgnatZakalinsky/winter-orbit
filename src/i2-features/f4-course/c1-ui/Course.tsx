import React, {ReactNode, useState} from 'react'
import s from './Course.module.css'
import {useParams} from 'react-router-dom'
import {getCourse} from '../c2-bll/courses'

type CoursePropsType = {}

const Course: React.FC<CoursePropsType> = ({}) => {
    const {id: lesson_id} = useParams()
    const [lesson, setLesson] = useState<number>(0)
    const [selectedTerm, selectTerm] = useState<string>('')

    const course = getCourse(lesson_id)
    let mappedLesson: ReactNode = 'error'

    let term: ReactNode = 'none'

    if (course !== 'error' && course.lessons.length > lesson) {
        mappedLesson = course.lessons[lesson].content.map(c => {
            switch (c.type) {
                case 'div': {
                    let content = c.content.map(i => {
                        switch (i.type) {
                            case 'span': {
                                return <span key={i._id} style={i.style}>{i.text}&nbsp;</span>
                            }
                            case 'term': {
                                return (
                                    <span
                                        key={i._id}
                                        style={i.style}
                                        onClick={() => {
                                            const term = course.terms.find(t => t.word === i.text) || 'error'

                                            selectTerm(term !== 'error' ? term._id : '')
                                        }}
                                    >
                                    {i.text}&nbsp;
                                </span>
                                )
                            }
                            default:
                                return null
                        }
                    })

                    return (
                        <div key={c._id} style={c.style}>
                            {content}
                        </div>
                    )
                }
                default:
                    return null
            }
        })

        const termObject = course.terms.find(t => t._id === selectedTerm) || 'error'
        if (termObject !== 'error') {
            term = (
                <div>
                    <span style={{color: 'red'}}>{termObject.word}</span> - {termObject.text}
                </div>
            )
        }
    }

    const setLessonMinus = () => {
        if (lesson > 0) setLesson(lesson - 1)
    }
    const setLessonPlus = () => {
        if (course !== 'error' && course.lessons.length > lesson + 1)
        setLesson(lesson + 1)
    }

    return (
        <div className={s.page}>
            <div className={s.lessonBlock}>
                <div className={s.lesson}>
                    {mappedLesson}
                </div>

                <div className={s.buttons}>
                    <button onClick={setLessonMinus}>К прошлому уроку</button>
                    <button onClick={setLessonPlus}>следующее занятие</button>
                </div>
            </div>

            <div className={s.leftBlock}>
                <div className={s.dictionary}>
                    {term}
                </div>

                <div className={s.hints}>
                    подсказки
                </div>
            </div>
        </div>
    )
}

export default Course