/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type AuthState = {
	accessToken: string | null,
};
const initialState: AuthState = {
	accessToken: null
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAccessToken: (state, action: PayloadAction<string>) => {
			state.accessToken = action.payload;
		},
	},

});
export const { setAccessToken } = authSlice.actions;
const { reducer } = authSlice;
export default reducer;
