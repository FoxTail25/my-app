import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from '../parts/student/studentSlice'
// import productSlice from '../parts/products/productSlice';

export default configureStore ({
	reducer:{
		students: studentsReducer,
		// products: productSlice
	}
})