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


// const courses: Course[] = [
// 	{
// 		_id: '1',
// 		title: 'Start with the letter',
// 		background: 'https://cdn1.vectorstock.com/i/1000x1000/62/40/thai-alphabet-letters-vector-34016240.jpg',
// 		description:
//       'Every language starts with the simplest things, lets start with the alphabet and some basic vocabulary selected by Tiny Thai!',
// 		price: 600000,
// 		alias: 'ขึ้นต้นด้วยตัวอักษร',
// 		degreeOfDifficulty: 7,
// 		rating: 4.5
// 	},
// 	{
// 		_id: '2',
// 		title: 'Get creative with vocabulary ...',
// 		background: 'https://png.pngtree.com/artfonts_detail/20181226/thai-red-font-text-sea-weed-pair-smooth-png_6780.jpg',
// 		description:
//       'In this course, students will be introduced to vocabulary words and how to use them in different communication ...',
// 		price: 800000,
// 		alias: 'ใช้ความคิดสร้างสรรค์ด้วยคํา..',
// 		degreeOfDifficulty: 8,
// 		rating: 4.4
// 	},
// 	{
// 		_id: '3',
// 		title: 'Fluent with vocabulary ...',
// 		background: 'https://learnthaistyle.com/wp-content/uploads/2019/05/Screen-Shot-2014-07-21-at-3.02.08-PM.png',
// 		description:
//       'This course will help students improve their ability to use the Thai language and better understand the ...',
// 		price: 850000,
// 		alias: 'คล่องแคล่วกับคําศัพท์และไวยากรณ์',
// 		degreeOfDifficulty: 9,
// 		rating: 4.8
// 	},
// ]

const Home = () => {
	const isScreenLarge: boolean | null = useBreakpoint(up('md'))
	const dispatch = useAppDispatch()
	const handleAddToCart = (course: Course) => {
		dispatch(addToCart(course))
	}

	const courses: Course[] = useAppSelector(({ course }) => course.courseList)
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
