import NewTask from './NewTask';
import Task from './Task';

const Tasks = ({ projectId, tasks, handleAddTask, handleDeleteTask }) => {
  const onAddTask = (newTaskTitle) => {
    handleAddTask(projectId, newTaskTitle);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
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
    </section>
  );
};

export default Tasks;
