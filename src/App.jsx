import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './app/root';

const router = createBrowserRouter([{ path: '/', element: <Root/>}])

export default function App() {
  return <>
  <RouterProvider router={router}/>
  </>
}
