import { useNavigate } from 'react-router-dom'
import {  Typography } from '@mui/material'

import { courses } from '../../shared/common/constants/data'
import { MCourse } from '../../shared/common/types'
import PrimaryCarousel from '../../shared/components/PrimaryCarousel'
import { useAppDispatch } from '../../shared/stores/hooks'
import { setCurrentCourse } from '../../shared/stores/slices/courseSlice'

import { CourseGridItem, CourseItem, CourseListContainer, CourseGridContainer, CourseImageBox, CourseImage, CourseInfoSection, CourseProgress, CourseProgressText } from './style'


const CourseList = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	return (
		<>
			<PrimaryCarousel />
			<CourseListContainer>
				<Typography fontSize={'2rem'}>Your courses</Typography>
				<CourseGridContainer container>
					{courses.slice(0.3).map((course: MCourse) => (
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
								navigate(`/courses/${course.id}`)
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
										value={course.progress}
									/>
								</CourseInfoSection>
								<CourseProgressText>{`${course.progress}%`}</CourseProgressText>
								<CourseImageBox
									sx={{
										backgroundColor: 'trans',
									}}
								>
									<CourseImage src={course.image} />
								</CourseImageBox>
							</CourseItem>
						</CourseGridItem>
					))}
				</CourseGridContainer>

			</CourseListContainer>
		</>
	)
}

export default CourseList