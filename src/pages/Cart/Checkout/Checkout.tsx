import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Course } from '../../../shared/common/types'
import RestService from '../../../shared/rest/RestService'


type CheckoutParam = {
	cartItems: Course[],
}
export default function Checkout({cartItems} : CheckoutParam) {
	const navigate = useNavigate()
	const courseIdList : string[] = []
	
	
	const payTheBill = async () => {
		cartItems.forEach((item) => courseIdList.push(String(item._id))) 
		console.log(courseIdList)
		const { data } = await RestService.post(process.env.BACKEND_ENDPOINT + '/payments/url', {
			courseIds: courseIdList
		})
		window.location.replace(data.url)
	}
  
	return (
		<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mb: 5 }}>
			<Box sx={{ my: 3, mx: 2 }}>
				<Grid container alignItems="center">
					<Grid item xs>
						<Typography gutterBottom variant="h4" component="div">
              Subtotal ({cartItems.length}) items
						</Typography>
					</Grid>
				</Grid>
				<Typography color="text.secondary" variant="body2">
					{cartItems
						.reduce((acc, item) => acc + item.price, 0)
						.toFixed(2)}
				</Typography>
			</Box>
			<Divider variant="middle" />
			<Box sx={{ mt: 3, ml: 1, mb: 1 }}>
				<Button variant="contained" color='secondary' onClick={payTheBill} 
					disabled={cartItems.length === 0 ? true : false} 
				>
          Checkout
				</Button>
			</Box>
		</Box>
	)
}
