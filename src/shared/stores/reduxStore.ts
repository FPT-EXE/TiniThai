import { configureStore } from '@reduxjs/toolkit';

import lessonSlice from './slices/lessonSlice';


export const store = configureStore({
	reducer: {
		lesson: lessonSlice,
	}
});

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
