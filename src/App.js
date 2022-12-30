import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MianRouting from './Pages/MianRouting';
import AddTask from './Pages/AddTask/AddTask';
import LogIn from './Pages/LogIn';
import ShowTask from './Pages/ShowTask/ShowTask';
import PrivateRoute from './Pages/PrivateRoute';
import Details from './Pages/Details';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MianRouting />,
      children: [
        {
          path: '/',
          element: <PrivateRoute><AddTask /></PrivateRoute>
        },
        {
          path: '/login',
          element: <LogIn />
        },
        {
          path: '/showtask',
          element: <PrivateRoute><ShowTask /></PrivateRoute>
        },
        {
          path: '/details',
          element: <PrivateRoute><Details /></PrivateRoute>
        },
      ]
    },
  ]); return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
