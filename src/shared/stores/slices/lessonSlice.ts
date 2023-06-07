import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Lesson, LessonAnswer } from '../../common/types';

// Define a type for the slice state
type LessonSlice = {
	lessons: Lesson[] | null,
	currentLesson: Lesson | null,
	lessonAnswers: LessonAnswer[],
};

// Define the initial state using that type
const initialState: LessonSlice = {
	lessons: null,
	currentLesson: null,
	lessonAnswers: []
};

export const lessonSlice = createSlice({
	name: 'lesson',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setLessons: (state, action: PayloadAction<Lesson[]>) => {
			state.lessons = action.payload;
		},
		setCurrentLesson: (state, action: PayloadAction<Lesson>) => {
			state.currentLesson = action.payload;
		},
		setLessonAnswers: (state, action: PayloadAction<LessonAnswer[]>) => {
			state.lessonAnswers = action.payload;
		},
	},
});

export const { setLessons, setCurrentLesson, setLessonAnswers} = lessonSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default lessonSlice.reducer;
