// import { NewStudentForm } from '../parts/student/NewStudentForm';
// import { StudentsList } from '../parts/student/studentsList';
import { NavLink, Outlet } from 'react-router-dom'

export default function Root() {


	return <div id="main">
		<div id="menu">
			<nav>
				<NavLink to="/students">
					Students
				</NavLink>
				<a href="#">Teachers</a>
			</nav>
		</div>

		<div id="main_page">
			<h2>My student app.</h2>
			<hr />
			<Outlet />

		</div>
	</div>
}