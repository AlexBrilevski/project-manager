const Project = ({ project }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-stone-600 mb-2">
        {project.title}
      </h1>
      <p className="text-stone-400 mb-4">
        {project.dueDate}
      </p>
      <p className="text-stone-600 mb-4">
        {project.description}
      </p>
    </div>
  );
};

export default Project;
