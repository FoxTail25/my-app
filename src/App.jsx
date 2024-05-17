import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './app/root';
import { StudentsList } from './parts/student/studentsList';
import { StudentPage } from './parts/student/StudentPage';

const router = createBrowserRouter([
  { path: '/', element: <Root/>, children:[
    {
      path: '/students',
      element: <StudentsList />,
    },
    {
      path: '/student/:studentId',
      element: <StudentPage />,
    },
  ]}
])

export default function App() {
  return <>
  <RouterProvider router={router}/>
  </>
}
