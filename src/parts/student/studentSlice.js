import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		id:'1',
		age: '20',
		name: 'Tom',
		lastName: 'Smit',
		specialiti: 'medic',
	},
	{
		id:'2',
		age: '22',
		name: 'Fox',
		lastName: 'Tail',
		specialiti: 'programmer',
	},
]


const studentsSlice = createSlice({
	name: 'students',
	initialState,
	reducers:{}
})

export default studentsSlice.reducer