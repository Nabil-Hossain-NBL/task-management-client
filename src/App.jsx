
import './App.css'
import Navbar from './components/Navbar';
import TaskCard from './components/TaskCard';
import { useEffect, useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch('https://task-management-server-mu.vercel.app/task')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, [tasks]);

  return (
    <>

      <Navbar></Navbar>

      <h1 className="text-3xl text-center font-bold underline">
        You Have {tasks?.length} task
      </h1>
      {
        tasks.map(task => <TaskCard
          key={task._id}
          task={task}
        ></TaskCard>)
      }
    </>
  )
}

export default App
