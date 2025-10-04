import Button from './Button';

const Task = ({ projectId, taskIndex, task, handleDeleteTask }) => {
  return (
    <li className="flex justify-between my-4">
      {task.title}
      <Button onClick={() => handleDeleteTask(projectId, taskIndex)}>Clear</Button>
    </li>
  );
};

export default Task;
