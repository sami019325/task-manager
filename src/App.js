import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MianRouting from './Pages/MianRouting';
import AddTask from './Pages/AddTask/AddTask';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MianRouting />,
      children: [
        {
          path: '/',
          element: <AddTask />
        }
      ]
    },
  ]); return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
