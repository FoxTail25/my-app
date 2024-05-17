import { useSelector } from 'react-redux';
import { NewStudentForm } from './NewStudentForm'
import { Link } from 'react-router-dom';

export const StudentsList = () => {

	const students = useSelector((state) => state.students)


	const dispStudents = students.map((student) => (
		<div key={student.id} className='student-excerpt'>
			<h3>Fullname: {student.name} {student.lastName}</h3>
		
			<Link to={`/student/${student.id}`} className='link-btn'>
				view
			</Link>
		</div>
	))

	return <>
		<NewStudentForm />
		<div>
			<h2>Students</h2>
			{dispStudents}
		</div>
	</>
}