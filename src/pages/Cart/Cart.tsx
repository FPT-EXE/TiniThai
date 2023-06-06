import { Typography } from '@mui/material'

import { useAppSelector } from '../../shared/utils/reduxHook'
import { Course } from '../../shared/common/types'

import CardItem from './CardItem'
import * as Styled from './styles'


const Cart = () => {
	// const dispatch = useAppDispatch()

	const cartItems: Course[] = useAppSelector(({ cart }) => cart.cartItems)

	return (
		<Styled.Cart>
			<Styled.CardItems>
				<Typography
					variant='h4'
					sx={{
						mb: 1,
						fontWeight: 600,
						color: 'grey.800',
						textDecoration: 'none',
						ml: 'auto',
						mr: 'auto',
						width: '80%'
					}}
				>
          Shopping Cart
				</Typography>
				
				
				{cartItems.length === 0 ? (
					<Typography variant="body2" color="text.secondary">Your cart is empty</Typography>
				) : (
					cartItems.map((item, index) => (
						<CardItem key={index} {...item} />
					))
				)}
			</Styled.CardItems>
		</Styled.Cart>
	)
}

export default Cart
