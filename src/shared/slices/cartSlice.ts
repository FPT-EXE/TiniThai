import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Course } from '../common/types';


const courses: Course[] = [
	{
		title: 'Course 1',
		img: '',
		description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
		price: 400,
		alias: 'Tieng Thai 1',
		degreeOfDifficulty: 7,
		rating: 4.5
	},
	{
		title: 'Course 2',
		img: '',
		description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
		price: 450,
		alias: 'Tieng Thai 2',
		degreeOfDifficulty: 8,
		rating: 4.4
	},
];
type CartState = {
	cartItems: Course[],
}
const initialState: CartState = {
	cartItems: courses
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCartItems: (state, action: PayloadAction<Course[]>) => {
			state.cartItems = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder;

	},
});

export const { setCartItems } = cartSlice.actions;

const { reducer } = cartSlice;
export default reducer;
