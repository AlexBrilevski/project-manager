import Button from "./Button";

const Sidebar = ({ projects, handleProjectClick, handleAddProjectClick }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button
          className={'px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'}
          onClick={handleAddProjectClick}
        >
          + Add Project
        </Button>
      </div>
      {projects.length > 0 &&
        <ul className="flex flex-col gap-1 my-4">
          {projects.map(project =>
            <li key={project.id}>
              <Button
                className={'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800'}
                onClick={() => handleProjectClick(project.id)}
              >
                {project.title}
              </Button>
            </li>
          )}
        </ul>
      }
    </aside>
  );
};

export default Sidebar;
