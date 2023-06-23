/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import RestService from '../rest/RestService';
import { Course, CreateCourseForm } from '../common/types';


type CoursesState = {
	courseList: Course[],
	currentCourse: Course | null,
	coursesLoading: boolean,
};
const initialState: CoursesState = {
	courseList: [],
	currentCourse: null,
	coursesLoading: true
};

export const coursesFetch = createAsyncThunk(
	'course/coursesFetch',
	async () => {
		const { data } = await RestService.get(
			process.env.BACKEND_ENDPOINT + '/courses'
		);
		return data;
	}
);
export const createCourse = createAsyncThunk(
	'course/create',
	async (newCourse: CreateCourseForm) => {
		const { data } = await RestService.post(
			process.env.BACKEND_ENDPOINT + '/courses',
			newCourse
		);

		return data;
	}
);

export const updateCourse = createAsyncThunk(
	'course/update',
	async (updatedCourse: Course) => {
		const { data } = await RestService.put(
			process.env.BACKEND_ENDPOINT + `/courses/${updatedCourse._id}`,
			updatedCourse
		);
		return data;
	}
);
export const deleteCourse = createAsyncThunk(
	'course/delete',
	async (courseId: string) => {
		const { data } = await RestService.delete(
			process.env.BACKEND_ENDPOINT + `/courses/${courseId}`
		);
		return data;
	}
);

const courseSlice = createSlice({
	name: 'course',
	initialState,
	reducers: {
		setCurrentCourse: (state, action: PayloadAction<Course>) => {
			state.currentCourse = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(coursesFetch.pending, (state) => {
			state.coursesLoading = true;
		});
		builder.addCase(coursesFetch.fulfilled, (state, action) => {
			state.courseList = action.payload;
			state.coursesLoading = false;
		});
	},
});
export const { setCurrentCourse } = courseSlice.actions;
const { reducer } = courseSlice;
export default reducer;
