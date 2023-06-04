import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddTask from './components/AddTask.jsx';
import UpdatedTask from './components/UpdatedTask.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "add-task",
    element: <AddTask></AddTask>
  },
  {
    path: "update-task/:id",
    element: <UpdatedTask></UpdatedTask>,
    loader: ({params}) => fetch(`http://localhost:5000/task/${params.id}`)
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto bg-neutral text-white overflow-hidden">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
