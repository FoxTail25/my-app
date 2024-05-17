import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const StudentPage =() =>{
	
	let params = useParams()
	
	const {studentId} = params

	const student = useSelector(
		(state)=> state.students.find((student)=> student.id === studentId)
	)

	if(!student) {
		return <p>No such student</p>
	}

	return <>
	<h2>{student.name}</h2>
	<p>LastName: {student.lastName}</p>
	<p>Age: {student.age}</p>
	<p>Specialiti: {student.specialiti}</p>
	</>
}