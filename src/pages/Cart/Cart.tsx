import { Typography } from '@mui/material'
import { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../shared/utils/reduxHook'
import { Course } from '../../shared/common/types'
import { removeFromCart } from '../../shared/slices/cartSlice'
import ConfirmDialog from '../../shared/components/DialogCustom/ConfirmDialog'

import CardItem from './CardItem'
import * as Styled from './styles'
import Checkout from './Checkout'


const Cart = () => {
	const dispatch = useAppDispatch()
	const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false)
	const [currentCourse, setCurrentCourse] = useState<Course>()

	const cartItems: Course[] = useAppSelector(({ cart }) => cart.cartItems)
	const handleOpenDelete = (course: Course) => {
		setIsOpenDelete(true)
		setCurrentCourse(course)
	}
	const handleCloseDelete = () => {
		setIsOpenDelete(false)
	}
	const handleRemoveFromCart = (course: Course | undefined) => {
		dispatch(removeFromCart(course))
	}

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
						<CardItem key={index} course={item} handleOpenDelete={() => handleOpenDelete(item)} />
					))
				)}
			</Styled.CardItems>

			{isOpenDelete && (
				<ConfirmDialog
					title="Remove Course"
					openDialog={isOpenDelete}
					handleCloseDialog={handleCloseDelete}
					maxWidth="sm"
					handleConfirm={() => {
						handleRemoveFromCart(currentCourse)
						handleCloseDelete()
					}}
				>
					<div style={{ minHeight: '100px' }}>
						<Typography
							variant="h6"
							mb={1}
							sx={{ fontWeight: '600' }}
						>
                            Are you sure ?
						</Typography>
						<Typography variant="body2">
                            Do yo really want to delete this course. This
                            process can not be undone.
						</Typography>
					</div>
				</ConfirmDialog>
			)}

			<Checkout cartItems={cartItems} />
		</Styled.Cart>
	)
}

export default Cart
