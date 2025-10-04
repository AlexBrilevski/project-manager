import Tasks from './Tasks';

const Project = ({ project, handleDelete, handleAddTask, handleDeleteTask }) => {
  return (
    <div className="w-[35rem] mt-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">
          {project.title}
        </h1>
        <button onClick={() => handleDelete(project.id)}>
          Delete
        </button>
      </div>
      <p className="text-stone-400 mb-4">
        {project.dueDate}
      </p>
      <p className="text-stone-600 mb-4">
        {project.description}
      </p>
      <Tasks
        projectId={project.id}
        tasks={project.tasks}
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default Project;
