/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import RestService from '../rest/RestService';
import { Payment } from '../common/types';


type PaymentsState = {
	paymentList: Payment[],
	paymentsLoading: boolean,
};
const initialState: PaymentsState = {
	paymentList: [],
	paymentsLoading: true,
};

export const paymentsFetch = createAsyncThunk(
	'payment/paymentsFetch',
	async () => {
		const { data } = await RestService.get(
			process.env.BACKEND_ENDPOINT + '/payments'
		); 
		return data;
	}
);

const courseSlice = createSlice({
	name: 'payment',
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder.addCase(paymentsFetch.pending, (state) => {
			state.paymentsLoading = true;
		});
		builder.addCase(paymentsFetch.fulfilled, (state, action) => {
			state.paymentList = action.payload;
			state.paymentsLoading = false;
		});
	},
});
// export const { } = courseSlice.actions;
const { reducer } = courseSlice;
export default reducer;
