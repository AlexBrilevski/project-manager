const Task = ({ task }) => {
  return (
    <li className="flex justify-between my-4">{task.title}</li>
  );
};

export default Task;
