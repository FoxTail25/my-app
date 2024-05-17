import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { studentAdded } from './studentSlice';


export const NewStudentForm = () => {
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [age, setAge] = useState(20)
	const [specialiti, setSpecialiti] = useState('')
	const dispatch = useDispatch()



	const onNameChanged = (e) => setName(e.target.value)
	const onLastNameChanged = (e) => setLastName(e.target.value)
	const onAgeChanged = (e) => setAge(e.target.value)
	const onSpecialitiChanged = (e) => setSpecialiti(e.target.value)

	const onSaveStudentClick =() => {
		if (name && lastName && age && specialiti) {
			dispatch(
				studentAdded({
					id: nanoid(),
					name,
					lastName,
					age,
					specialiti
				})
			)
		}
	}

	return (
		<div>
			<h2>Add a New Student</h2>
			<form>
				<p>
					<label htmlFor="studentName">Name:</label>
					<input
						id="studentName"
						name="studentName"
						value={name}
						onChange={onNameChanged}
					/>
				</p>
				<p>
					<label htmlFor="studentLastName">LastName:</label>
					<input
						id="studentLastName"
						name="studentLastName"
						value={lastName}
						onChange={onLastNameChanged}
					/>
				</p>
				<p>
					<label htmlFor="studentAge">Age:</label>
					<input
						id="studentAge"
						name="studentAge"
						type='number'
						min={20}
						value={age}
						onChange={onAgeChanged}
					/>
				</p>
				<p>
					<label htmlFor="studentSpecialiti">Specialiti:</label>
					<input
						id="studentSpecialiti"
						name="studentSpecialiti"
						value={specialiti}
						onChange={onSpecialitiChanged}
					/>
				</p>
				<button type="button" onClick={onSaveStudentClick}>save</button>
			</form>
		</div>
	)
}