import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';

import RestService from '../rest/RestService';


const initialState = {
	courses: [],
	status: null,
};

export const coursesFetch = createAsyncThunk(
	'course/coursesFetch',
	async () => {
		return await RestService.get();
	}
);

const courseSlice = createSlice({
	name: 'course',
	initialState,
	reducers: {},
	extraReducers: {
		[coursesFetch.pending]: (state, action) => {
			state.status = 'pending';
		},
		[coursesFetch.fulfilled]: (state, action) => {
			state.items = action.payload;
			state.status = 'success';
		},
		[coursesFetch.rejected]: (state, action) => {
			state.status = 'rejected';
		},
	},
});

const { reducer } = courseSlice;
export default reducer;
