import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../slices/cartSlice';
import courseSlice from '../slices/courseSlice';
import userSlice from '../slices/userSlice';
import authSlice from '../slices/authSlice';
import paymentSlice from '../slices/paymentSlice';

import lessonSlice from './slices/lessonSlice';


export const store = configureStore({
	reducer: {
		auth: authSlice,
		lesson: lessonSlice,
		course: courseSlice,
		cart: cartReducer,
		user: userSlice,
		payment: paymentSlice
	}
});

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
