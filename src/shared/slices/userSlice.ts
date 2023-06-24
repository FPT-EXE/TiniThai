/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import RestService from '../rest/RestService';
import { User } from '../common/types';


type UsersState = {
	userList: User[],
	currentUser: User | null,
	usersLoading: boolean,
};
const initialState: UsersState = {
	userList: [],
	currentUser: null,
	usersLoading: true
};

export const usersFetch = createAsyncThunk(
	'user/usersFetch',
	async () => {
		const { data } = await RestService.get(
			process.env.BACKEND_ENDPOINT + '/users'
		);
		return data;
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCurrentUser: (state, action: PayloadAction<User>) => {
			state.currentUser = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(usersFetch.pending, (state) => {
			state.usersLoading = true;
		});
		builder.addCase(usersFetch.fulfilled, (state, action) => {
			state.userList = action.payload;
			state.usersLoading = false;
		});
	},
});
export const { setCurrentUser } = userSlice.actions;
const { reducer } = userSlice;
export default reducer;
