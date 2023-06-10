/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-lines-per-function */

import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

import { useAppDispatch, useAppSelector } from '../../shared/stores/hooks'
// import { initializeAxios } from '../../shared/rest/axiosUtils'
import { lessons } from '../../shared/common/constants/data'
import { setCurrentLesson } from '../../shared/stores/slices/lessonSlice'
import FixedBottomButton from '../../shared/components/Button'

import { LessonDetailContainer } from './styles'
import QuizSection from './LessonPractice/QuizSection'
import LectureSection from './LessonPractice/LectureSection'


const LessonDetail = () => {
	const { lessonId } = useParams()
	const navigate = useNavigate()
	const currentLesson = useAppSelector((state) => state.lesson.currentLesson)
	const currentCourse = useAppSelector((state) => state.course.currentCourse)
	const dispatch = useAppDispatch()
	// const axiosInstance = initializeAxios({options: {
	// 	baseURL: process.env.API_DEV_BASE_URL,
	// }})
	// const res = axiosInstance.get('/tinithai/courses')
	// console.log('res', res)
	useEffect(() => {
		console.log('currentCourse',currentCourse)			
	}, [currentCourse])

	useEffect(() => {
		if(!currentLesson && lessonId){
			const index = lessons.findIndex((lesson)=> lesson.id === Number.parseInt(lessonId))
			if(index > -1){
				dispatch(setCurrentLesson(lessons[index]))
			}
			else dispatch(setCurrentLesson(lessons[0]))
		}
		
	}, [currentLesson])

	return (
		<LessonDetailContainer>
			{currentLesson ? (
				currentLesson.type === 'quiz' ? (
					<QuizSection currentLesson={currentLesson} />
				) : (
					<LectureSection currentLesson={currentLesson} />
				)
			) : (
				<></>
			)}
			{
				currentLesson && <FixedBottomButton startIcon={<ArrowBackIosIcon />}  onClick={() => navigate(`/courses/${currentLesson?.courseId}`)}>Back To Course</FixedBottomButton>
			}
		</LessonDetailContainer>
	)
}

export default LessonDetail
