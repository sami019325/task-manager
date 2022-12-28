import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MianRouting from './Pages/MianRouting';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MianRouting />,
    },
  ]); return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
