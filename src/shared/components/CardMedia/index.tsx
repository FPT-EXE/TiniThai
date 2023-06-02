import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions, Grid, IconButton, Tooltip } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'


type Course = {
	title: string,
	alias: string,
	img: string,
	price: number,
	description: string,
	rating: string,
	degreeOfDifficulty: number,
}

export default function MultiActionAreaCard(course: Course) {
	console.log(course)
	console.log(course ? course.title : 'hong')
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={course.img ? course.img : '/static/images/cards/contemplative-reptile.jpg'}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{course.title}
					</Typography>
					<Typography gutterBottom variant="h6" component="div">
						{course.alias}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{course.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Grid container>
					<Typography gutterBottom variant="h6" component="div">
						{course.price}
					</Typography>
					<Tooltip title="Add to cart" sx={{ float: 'right' }}>
						<IconButton
							size="large"
							aria-label="add to cart"
							color="secondary"
						>
							<AddShoppingCartIcon />
						</IconButton>
					</Tooltip>
				</Grid>
				
				
			</CardActions>
		</Card>
	)
}
