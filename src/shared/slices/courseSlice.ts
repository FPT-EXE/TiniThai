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
		const { data } = await RestService.get(process.env.BACKEND_ENDPOINT + '/courses');
		return data;
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
