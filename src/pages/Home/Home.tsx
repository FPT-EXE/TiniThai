import { useEffect } from 'react'
import { Grid, Typography } from '@mui/material'
import { up } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import { useAppDispatch, useAppSelector } from '../../shared/utils/reduxHook'
import welcomeImg from '../../assets/images/welcomeImg.svg'
import { Course } from '../../shared/common/types'
import { addToCart } from '../../shared/slices/cartSlice'
import { coursesFetch } from '../../shared/slices/courseSlice'

import MultiActionAreaCard from './CardMedia'
import * as Styled from './styles'


const courses: Course[] = [
	{
		id: '1',
		title: '1914 translation by H. Rackham',
		img: '',
		description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
		price: 400,
		alias: 'Tieng Thai 1',
		degreeOfDifficulty: 7,
		rating: 4.5
	},
	{
		id: '2',
		title: '1914 translation by H. Rackham',
		img: '',
		description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
		price: 450,
		alias: 'Tieng Thai 2',
		degreeOfDifficulty: 8,
		rating: 4.4
	},
	{
		id: '3',
		title: '1914 translation by H. Rackham',
		img: '',
		description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
		price: 500,
		alias: 'Tieng Thai 3',
		degreeOfDifficulty: 9,
		rating: 4.8
	},
]

const Home = () => {
	const isScreenLarge: boolean | null = useBreakpoint(up('md'))
	const dispatch = useAppDispatch()
	const handleAddToCart = (course: Course) => {
		dispatch(addToCart(course))
	}

	// const courses: Course[] = useAppSelector(({ course }) => course.courseList)
	useEffect(() => {
		dispatch(coursesFetch())
		// console.log(courses)
	}, [dispatch])

	return (
		<div>
			<Styled.Home>
				<Styled.Carousel>
					<Styled.ContentCarousel
						container
						spacing={2}
						width={isScreenLarge ? '40%' : '90%'}
					>
						<Grid item xs={6}>
							<Typography
								variant="h6"
								sx={{
									color: 'white',
								}}
							>
                Sawatddi kha
							</Typography>
							<Typography
								variant="subtitle2"
								sx={{
									mb: 3,
									color: 'white',
								}}
							>
                Welcome, Mr. Daniel
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<img
								src={welcomeImg}
								alt="welcomeImage"
								width="auto"
								height="100%"
							/>
						</Grid>
					</Styled.ContentCarousel>
				</Styled.Carousel>
				<Styled.Courses>
					<Grid container spacing={2}>
						{courses.map((course, index) => (
							<Grid key={index} item xs={12} sm={4} md={4}>
								<MultiActionAreaCard course={course} handleAddToCart={() => handleAddToCart(course)} />
							</Grid>
						))}
					</Grid>
				</Styled.Courses>
			</Styled.Home>
		</div>
	)
}

export default Home
