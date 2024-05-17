import { useSelector } from 'react-redux'

export const StudentsList = () => {
	const students = useSelector((state) => state.students)

	const dispStudents = students.map((student) => (
		<div key={student.id}>
			<h3>fullname: {student.name} {student.lastName}</h3>
			<p>Age: {student.age}</p>
			<p>Specialiti: {student.specialiti}</p>
		</div>
	))

	return (
		<div>
			<h2>Students</h2>
			{dispStudents}
		</div>
	)
}