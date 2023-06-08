import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import {  MCourse } from '../../common/types';

// Define a type for the slice state
type CourseSlice = {
	currentCourse: MCourse | null,

};

// Define the initial state using that type
const initialState: CourseSlice = {
	currentCourse: null,

};

export const courseSlice = createSlice({
	name: 'course',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setCurrentCourse: (state, action: PayloadAction<MCourse>) => {
			state.currentCourse = action.payload;
		},

	},
});

export const { setCurrentCourse} = courseSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default courseSlice.reducer;
