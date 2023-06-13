/* eslint-disable max-lines-per-function */
import {  Stack, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
// import {  useParams } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import courseDetailmg from '../../../public/images/CourseDetail.png'
import { useAppDispatch, useAppSelector } from '../../shared/stores/hooks'
import { Lesson } from '../../shared/common/types'
import { setCurrentLesson } from '../../shared/stores/slices/lessonSlice'
import { lessonColors, lessons } from '../../shared/common/constants/data'
import FixedBottomButton from '../../shared/components/Button'

import {
	CourseDetailButton,
	CourseDetailFlex,
	CourseDetailImage,
	CourseDetailImageSection,
	IconBox,
	LessonGridContainer,
	LessonGridItem,
	LessonImage,
	LessonImageBox,
	LessonInfoSection,
	LessonItem,
	LessonProgress,
	LessonProgressText,
	LessonSection,
} from './styles'
import LessonModal from './LessonModal'


const getLessonColor = (lesson: Lesson, isLinear?: boolean): string => {
	const lastIndex = lessonColors.length
	let resultColor: string = lessonColors[lastIndex - 1].bgColor
	lessonColors.map((color) => {
		if (lesson.level === color.level) {
			if (isLinear) resultColor = color.progressColor
			else resultColor = color.bgColor
		}
	})
	return resultColor
}

const CourseDetail = () => {
	// const { courseId } = useParams()
	const [isOpenModal, setIsOpenModal] = useState(false)
	const currentLesson = useAppSelector((state) => state.lesson.currentLesson)
	const currentCourse = useAppSelector((state) => state.course.currentCourse)
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	return (
		<>
			<Stack justifyContent={'center'} minHeight="100vh">
				<CourseDetailFlex>
					<CourseDetailImageSection>
						<CourseDetailImage src={currentCourse ? currentCourse.image : courseDetailmg} />
						<Typography fontSize={'1.875rem'}>{currentCourse ? currentCourse?.title : 'Introductory Thai'}</Typography>
					</CourseDetailImageSection>
					<LessonSection>
						<LessonGridContainer container>
							{lessons.slice(0.3).map((lesson: Lesson) => (
								<LessonGridItem
									item
									key={lesson.name}
									xs={12}
									sx={{
										':hover': {
											borderColor: '#000000',
											boxShadow: '0px 0px 10px -2px #000000',
										},
										':active': {
											transform: 'scale(1.05)',
										},
									}}
									onClick={() => {
										dispatch(setCurrentLesson(lesson))
										setIsOpenModal(true)
									}}
								>
									<LessonItem>
										<LessonImageBox
											sx={{
												backgroundColor: getLessonColor(lesson),
											}}
										>
											<LessonImage src={lesson.image} />
											{/* <Typography
												fontSize="0.7rem"
												color="white.main"
												textTransform="uppercase"
											>
												{`Level ${lesson.level}`}
											</Typography> */}
										</LessonImageBox>
										<LessonInfoSection>
											<Typography fontWeight={500} fontSize="17px">
												{lesson.name}
											</Typography>
											<Typography
												fontSize={'10px'}
												color="#50555C"
											>{`${lesson.time.hour} jam ${lesson.time.minute} menit`}</Typography>
											<LessonProgress
												sx={{
													backgroundColor: '#E5E5E5',
													'& .MuiLinearProgress-bar': {
														background: getLessonColor(lesson, true),
														borderRadius: '5px',
													},
												}}
												variant="determinate"
												value={
													(lesson.currentProgress / lesson.totalProgress) * 100
												}
											/>
										</LessonInfoSection>
										<LessonProgressText>{`${lesson.currentProgress}/${lesson.totalProgress}`}</LessonProgressText>
									</LessonItem>
								</LessonGridItem>
							))}
						</LessonGridContainer>
						<CourseDetailButton
							variant="contained"
							color="primary"
							endIcon={
								<IconBox>
									<ArrowForwardIosIcon sx={{ fontSize: '12px' }} />
								</IconBox>
							}
							onClick={()=> {dispatch(setCurrentLesson(lessons[0])); navigate(`/lessons/${lessons[0].id}`)}}
						>
              Start learning
						</CourseDetailButton>
					</LessonSection>
				</CourseDetailFlex>		
							
			</Stack>
			<FixedBottomButton startIcon={<ArrowBackIosIcon />} onClick={() => navigate('/courses')}>Back To Course</FixedBottomButton>		
			<LessonModal
				lesson={currentLesson}
				handleClose={() => setIsOpenModal(false)}
				isOpenModal={isOpenModal}
			/>
		</>
	)
}

export default CourseDetail
