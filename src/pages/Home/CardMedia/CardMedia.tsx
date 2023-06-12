import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, Grid, IconButton, Tooltip } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import { up } from 'styled-breakpoints'

import CourseThumbnail from '../../../assets/images/CourseThumbnail.jpg'
import { Course } from '../../../shared/common/types'


type CardCourse = {
	course: Course,
	handleAddToCart: () => void,
}
export default function MultiActionAreaCard({course, handleAddToCart} : CardCourse) {
	const isScreenLarge: boolean | null = useBreakpoint(up('md'))
	return (
		<Card sx={{ 
			display: 'flex', 
			width: '80%', 
			ml: 'auto', 
			mr: 'auto', 
			mb: 1, 
			mt: 1
		}}>
			<CardMedia
				component="img"
				sx={{ width: 151 }}
				image={course.background ? course.background : CourseThumbnail}
				alt="Live from space album cover"
			/>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography component="div" variant= { isScreenLarge ? 'h5' : 'h6' }>
						{course.title}
					</Typography>
					<Typography variant="subtitle1" color="text.secondary" component="div">
						{course.alias}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{course.description}
					</Typography>
				</CardContent>
				<Grid container sx={{mb: 1}}>
					<Grid item xs={7}>
						<Typography gutterBottom variant="h6" component="div" sx={{ml: 2}}>
							{course.price}
						</Typography>
					</Grid>
					<Grid item xs={5}>
						<Tooltip title="Add to cart" sx={{ float: 'right', mr: 2 }}>
							<IconButton
								size="large"
								aria-label="add to cart"
								color="secondary"
								onClick={handleAddToCart}
							>
								<AddShoppingCartIcon />
							</IconButton>
						</Tooltip>
					</Grid>
				</Grid>
			</Box>
			
		</Card>
	)
}
