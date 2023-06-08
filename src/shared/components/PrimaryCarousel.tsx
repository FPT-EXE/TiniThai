/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-lines-per-function */
import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import Slider from 'react-slick'

import Card1 from '../../assets/images/card1.png'

import style from './css/slick-dot.module.css'



const PrimaryCarousel = () => {
	const [slider, setSlider] = useState<Slider | null>(null)
	const settings = {
		dots: true,
		arrows: false,
		fade: true,
		infinite: true,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		dotsClass: style.dots_bar
		
	}

	const cards = [
		{
			title: 'Bahasa Sunda',
			text: 'Bandung - Jawa Barat',
			image: Card1
		},
		{
			title: 'Bahasa Jawa',
			text:  'Yogyakarta - Jawa Tengah',
			image: Card1
		},
		{
			title: 'Bahasa Minangkabau',
			text: 'Padang - Sumatera Barat',
			image: Card1
		},
	]

	return (
		<Box
			position={'relative'}
			// height={{ xs: '70vh', md: '100vh' }}
			maxWidth={'60%'}
			// sx={{paddingX: '20%'}}
		>
			{/* CSS files for react-slick */}
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
			/>
			{/* Slider */}
			<Slider {...settings} ref={(slider) => setSlider(slider)}>
				{cards?.map((card) => (
					<Box key={card.title} sx={{
						height: '30rem',
						backgroundImage: `url(${Card1})`,
						backgroundPosition:'center',
						backgroundRepeat:'no-repeat',
						backgroundSize:'cover',
						borderRadius: '7px'
					}}>
						<Stack
							sx={{
								justifyContent: 'space-between',
								height:'30%',
								width:'100%',
								position:' relative',
								top: '50%',
								paddingX: '2rem',
								// maxWidth: '25rem',
								// left: { xs: 0, md: '30vw' },
								transform: 'translate(0, -50%)',
								zIndex: 2,
					
							}}							
						>
							<Typography
								fontSize={'2rem'}
								color="#FFF"
							>
								{card.title}
							</Typography>
							<Typography fontSize={'1.5rem'} color="#cbc3c3" width={'40%'}>
								{card.text}
							</Typography>
						</Stack>
					</Box>
				))}
			</Slider>
		</Box>
	)
}
export default PrimaryCarousel
