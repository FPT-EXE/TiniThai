/* eslint-disable max-lines-per-function */
import { Stack, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
// import {  useParams } from 'react-router-dom'
import { useState } from 'react'

import courseDetailmg from '../../assets/images/CourseDetail.png'
import Lesson1 from '../../assets/images/Lesson1.png'
import Lesson2 from '../../assets/images/Lesson2.png'
import Lesson3 from '../../assets/images/Lesson3.png'

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


const lessons = [
	{
		title: 'Perkenalan',
		image: Lesson1,
		time: {
			hours: 1,
			minute: 30,
		},
		level: 1,
		currentProgress: 9,
		totalProgress: 50,
		bgColor: '#8BC34A',
		progressColor: 'linear-gradient(270deg, #8BC34A -36.71%, #11998E 167.09%)',
	},
	{
		title: 'Tata Bahasa',
		image: Lesson2,
		time: {
			hours: 1,
			minute: 45,
		},
		level: 2,
		currentProgress: 5,
		totalProgress: 40,
		bgColor: '#FBB237',
		progressColor: 'linear-gradient(270deg, #FFA000 -36.71%, #BB6414 167.09%)',
	},
	{
		title: 'Cara Pengucapan',
		image: Lesson3,
		time: {
			hours: 1,
			minute: 10,
		},
		level: 3,
		currentProgress: 12,
		totalProgress: 50,
		bgColor: '#FF4B4C',
		progressColor: 'linear-gradient(270deg, #D72714 -36.71%, #9D1515 167.09%)',
	},
]

const CourseDetail = () => {
	// const { courseId } = useParams()
	const [isOpenModal, setIsOpenModal] = useState(false)
	return (
		<>
			<Stack justifyContent={'center'} minHeight="100vh">
				<CourseDetailFlex>
					<CourseDetailImageSection>
						<CourseDetailImage src={courseDetailmg} />
						<Typography fontSize={'1.875rem'}>Introductory Thai</Typography>
					</CourseDetailImageSection>
					<LessonSection>
						<LessonGridContainer container>
							{lessons.slice(0.3).map((lesson) => (
								<LessonGridItem
									item
									key={lesson.title}
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
									onClick={()=> setIsOpenModal(true)}
								>
									<LessonItem>
										<LessonImageBox
											sx={{
												backgroundColor: lesson.bgColor,
											}}
										>
											<LessonImage src={lesson.image} />
											<Typography
												fontSize="0.7rem"
												color="white.main"
												textTransform="uppercase"
											>
												{`Level ${lesson.level}`}
											</Typography>
										</LessonImageBox>
										<LessonInfoSection>
											<Typography fontWeight={500} fontSize="17px">
												{lesson.title}
											</Typography>
											<Typography
												fontSize={'10px'}
												color="#50555C"
											>{`${lesson.time.hours} jam ${lesson.time.minute} menit`}</Typography>
											<LessonProgress
												sx={{
													backgroundColor: '#E5E5E5',
													'& .MuiLinearProgress-bar': {
														background: lesson.progressColor,
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
						>
              Mulai Belajar
						</CourseDetailButton>
					</LessonSection>
				</CourseDetailFlex>
			</Stack>
			<LessonModal handleClose={()=> setIsOpenModal(false)} isOpenModal={isOpenModal} />
		</>
	)
}

export default CourseDetail
