import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { Course } from '../common/types';


// const courses: Course[] = [
// 	{
// 		title: 'Course 1',
// 		img: '',
// 		description:
//       'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
// 		price: 400,
// 		alias: 'Tieng Thai 1',
// 		degreeOfDifficulty: 7,
// 		rating: 4.5
// 	},
// 	{
// 		title: 'Course 2',
// 		img: '',
// 		description:
//       'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
// 		price: 450,
// 		alias: 'Tieng Thai 2',
// 		degreeOfDifficulty: 8,
// 		rating: 4.4
// 	},
// ];
type CartState = {
	cartItems: Course[],
	cartTotalAmount: number,
}
const initialState: CartState = {
	cartItems: localStorage.getItem('cartItems')
		? JSON.parse(localStorage.getItem('cartItems')!)
		: [],
	cartTotalAmount: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const existingIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);

			if (existingIndex >= 0) {
				toast.info('Course already exist in your cart', {
					position: 'bottom-left',
				});
			} else {
				const tempProductItem = { ...action.payload };
				state.cartItems.push(tempProductItem);
				toast.success('Course added to cart', {
					position: 'bottom-left',
				});
			}
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
		removeFromCart(state, action) {
			state.cartItems.map((cartItem) => {
				if (cartItem.id === action.payload.id) {
					const nextCartItems = state.cartItems.filter(
						(item) => item.id !== cartItem.id
					);

					state.cartItems = nextCartItems;

					toast.error('Course removed from cart', {
						position: 'bottom-left',
					});
				}
				localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
				return state;
			});
		},
		getTotals(state) {
			let { total } = state.cartItems.reduce(
				(cartTotal, cartItem) => {
					const { price } = cartItem;
					cartTotal.total += price;
					return cartTotal;
				},
				{
					total: 0,
				}
			);
			total = parseFloat(total.toFixed(2));
			state.cartTotalAmount = total;
		},
		clearCart(state) {
			state.cartItems = [];
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
			toast.error('Cart cleared', { position: 'bottom-left' });
		},
	},
});

export const { addToCart, removeFromCart, getTotals, clearCart } = cartSlice.actions;

const { reducer } = cartSlice;
export default reducer;
