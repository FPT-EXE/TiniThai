import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';

import RestService from '../rest/RestService';
import { Course } from '../common/types';


type CoursesState = {
	courseList: Course[],
}
const initialState: CoursesState = {
	courseList: []
};

export const coursesFetch = createAsyncThunk(
	'course/coursesFetch',
	async () => {
		return await RestService.get<null, Course[]>('http://localhost:8080/v1/tinithai/courses');
	}
);

const courseSlice = createSlice({
	name: 'course',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(coursesFetch.fulfilled, (state, action) => {
				state.courseList = action.payload;
			});
	},
});

const { reducer } = courseSlice;
export default reducer;
