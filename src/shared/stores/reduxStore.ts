import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../slices/cartSlice';
import courseSlice from '../slices/courseSlice';

import lessonSlice from './slices/lessonSlice';


export const store = configureStore({
	reducer: {
		lesson: lessonSlice,
		course: courseSlice,
		cart: cartReducer
	}
});

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
