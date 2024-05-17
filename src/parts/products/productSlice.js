import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		id: '1',
		title: 'Product1',
		desc: 'This is an amazing product',
		price: '300',
		amount: '30',
	},
	{
		id: '2',
		title: 'Product2',
		desc: 'This is a nice product',
		price: '700',
		amount: '12',
	},
]

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers:{}
})

export default productSlice.reducer