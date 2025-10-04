const Task = ({ projectId, taskIndex, task, handleDeleteTask }) => {
  return (
    <li className="flex justify-between my-4">
      {task.title}
      <button onClick={() => handleDeleteTask(projectId, taskIndex)}>Clear</button>
    </li>
  );
};

export default Task;
