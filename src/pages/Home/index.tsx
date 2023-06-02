import React from 'react'
import { Grid, Typography } from '@mui/material'
import { up } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

import welcomeImg from '../../assets/images/welcomeImg.svg'
import HeaderLandingPage from '../../shared/components/Header'
import MultiActionAreaCard from '../../shared/components/CardMedia'

import * as Styled from './styles'


const courses = [
	{
		name: '1914 translation by H. Rackham',
		img: '',
		description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
		price: 400
	},
	{
		name: '1914 translation by H. Rackham',
		img: '',
		description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
		price: 400
	},
	{
		name: '1914 translation by H. Rackham',
		img: '',
		description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
		price: 400
	},
]

const Home = () => {
	const isScreenLarge: boolean | null = useBreakpoint(up('md'))

	return (
		<div>
			<Styled.Home>
				<HeaderLandingPage />
				<Styled.Carousel>
					<Styled.ContentCarousel container spacing={2} width={isScreenLarge ? '40%' : '90%'}>
						<Grid item xs={6}>
							<Typography
								variant='h6'
								sx={{
									color: 'white'
								}}
							>
            Sawatddi kha
							</Typography>
							<Typography
								variant='subtitle2'
								sx={{
									mb: 3,
									color: 'white'
								}}
							>
            Welcome, Mr. Daniel
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<img src={welcomeImg} alt='welcomeImage' width='auto' height='100%' />
						</Grid>
					</Styled.ContentCarousel>
				</Styled.Carousel>
				<Styled.Courses>
					<Grid container spacing={2}>
						{courses.map((course, index) => (
							<Grid key={index} item xs={12} sm={4} md={4}>
								<MultiActionAreaCard course={course} />
							</Grid>
						))}
					</Grid>
				</Styled.Courses>
			</Styled.Home>
			
		</div>
		
	)
}

export default Home
