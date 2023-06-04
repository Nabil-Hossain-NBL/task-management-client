import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddTask from './components/AddTask.jsx';
import UpdateTask from './components/UpdateTask.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/task')
  },
  {
    path: "add-task",
    element: <AddTask></AddTask>
  },
  {
    path: "update-task",
    element: <UpdateTask></UpdateTask>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto overflow-hidden">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </div>
)
