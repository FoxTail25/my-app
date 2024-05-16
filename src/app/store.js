import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from '../parts/student/studentSlice'

export default configureStore ({
	reducer:{
		students: studentsReducer
	}
})