import { useState } from 'react';
import Task from './Task';

const Tasks = ({ projectId, tasks, handleAddTask, handleDeleteTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const onAddTaskClcik = () => {
    handleAddTask(projectId, newTaskTitle);
    setNewTaskTitle('');
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-stone-500 my-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.currentTarget.value)}
        />
        <button onClick={onAddTaskClcik}>Add task</button>
      </div>
      {tasks.length > 0 ?
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task, index) =>
            <Task
              key={index}
              projectId={projectId}
              taskIndex={index}
              task={task}
              handleDeleteTask={handleDeleteTask}
            />
          )}
        </ul>
        :
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      }
    </div>
  );
};

export default Tasks;
