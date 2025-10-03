import Task from './Task';

const Tasks = ({ tasks }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-stone-500 my-4">Tasks</h2>
      {tasks.length > 0 ?
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map(task => <Task task={task} />)}
        </ul>
        :
        'This project does not have any tasks yet.'
      }
    </div>
  );
};

export default Tasks;
