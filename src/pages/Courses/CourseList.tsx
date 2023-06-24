import {  Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import { Course, } from '../../shared/common/types'
import PrimaryCarousel from '../../shared/components/PrimaryCarousel'
import { useAppDispatch, useAppSelector } from '../../shared/utils/reduxHook'
import { coursesFetch, setCurrentCourse } from '../../shared/slices/courseSlice'

import { CourseGridItem, CourseItem, CourseListContainer, CourseGridContainer, CourseImageBox, CourseImage, CourseInfoSection, CourseProgress, CourseProgressText } from './style'
import CourseModal from './CourseModal'


const CourseList = () => {
	const dispatch = useAppDispatch()
	const reduxStates = useAppSelector((state) => state)
	const courseList = reduxStates.course.courseList
	const currentCourse = reduxStates.course.currentCourse
	const [isOpenModal, setIsOpenModal] = useState(false)
	useEffect(() => {
		dispatch(coursesFetch())
	}, [dispatch])
	return (
		<>
			<PrimaryCarousel />
			<CourseListContainer>
				<Typography fontSize={'2rem'}>Your courses</Typography>
				<CourseGridContainer container>
					{courseList.map((course: Course, index) => (
						<CourseGridItem
							item
							key={course.title}
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
							onClick={()=> {
								dispatch(setCurrentCourse(course))
								setIsOpenModal(true)
							}}
						>
							<CourseItem>							
								<CourseInfoSection>
									<Typography fontWeight={500} fontSize="17px">
										{course.title}
									</Typography>

									<CourseProgress
										sx={{
											backgroundColor: '#E5E5E5',
											'& .MuiLinearProgress-bar': {
												background: 'linear-gradient(270deg, #C2CF7B -36.71%, #11998E 167.09%)',
												borderRadius: '5px',
											},
										}}
										variant="determinate"
										value={index+1 <= 10 ? (index+1)*10 : 0}
									/>
								</CourseInfoSection>
								<CourseProgressText>{`${index+1 <= 10 ? (index+1)*10 : 0}%`}</CourseProgressText>
								<CourseImageBox
									sx={{
										backgroundColor: 'trans',
									}}
								>
									<CourseImage src={course.background} />
								</CourseImageBox>
							</CourseItem>
						</CourseGridItem>
					))}
				</CourseGridContainer>
				<CourseModal
					course={currentCourse}
					handleClose={() => setIsOpenModal(false)}
					isOpenModal={isOpenModal}
				/>
			</CourseListContainer>
		</>
	)
}

export default CourseList
