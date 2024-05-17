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
	reducers:{
		studentAdded(state, action) {
			state.push(action.payload)
		},
		studentUpdated(state, action) {
			const { id, name, lastName, age, specialiti } = action.payload
			const desiredStudent = state.find(student => student.id === id)
			if (desiredStudent) {
				desiredStudent.name = name
				desiredStudent.lastName = lastName
				desiredStudent.age = age
				desiredStudent.specialiti = specialiti
			}
		},
	}
})

export default studentsSlice.reducer
export const { studentAdded } = studentsSlice.actions
export const { productAdded, productUpdated } = studentsSlice.actions