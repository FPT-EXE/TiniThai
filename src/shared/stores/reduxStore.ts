import { configureStore } from '@reduxjs/toolkit';

import courseSlice from './slices/courseSlice';
import lessonSlice from './slices/lessonSlice';


export const store = configureStore({
	reducer: {
		lesson: lessonSlice,
		course: courseSlice
	}
});

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
