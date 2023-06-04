
import { useLoaderData } from 'react-router-dom'
import './App.css'
import TaskCard from './components/TaskCard';

function App() {
  const tasks = useLoaderData();

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      You Have {tasks.length} task
    </h1>
    {
      tasks.map(task => <TaskCard
      key={task._id}
      task={task}
      ></TaskCard> )
    }
    </>
  )
}

export default App
