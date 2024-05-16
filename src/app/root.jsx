import { ProductsList } from '../parts/student/studentsList';

export default function Root() {


	return <div id="main">
		<div id="menu">
			<nav>
				<a href="#">Students</a>
				<a href="#">Teachers</a>
			</nav>
		</div>

		<div id="main_page">
			<h2>This is my first Redux app!</h2>
			<hr />
			<ProductsList />
		</div>
	</div>
}