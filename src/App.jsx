import { useState } from 'react';
import noProjectsImg from './assets/no-projects.png';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import NewProject from './components/NewProject';
import Project from './components/Project';

const state = [];

function App() {
  const [projects, setProjects] = useState(state);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isNewProjectView, setIsNewProjectView] = useState(false);

  const toggleNewProjectView = () => {
    setIsNewProjectView(prevState => !prevState);
    setSelectedProject(null);
  };

  const handleSaveProject = (project) => {
    setProjects(prevProjects => [...prevProjects, project]);
    setIsNewProjectView(false);
  };

  const handleSelectProject = (projectId) => {
    setSelectedProject({...projects[projectId], id: projectId});
    if (isNewProjectView) {
      setIsNewProjectView(false);
    }
  };

  const handleDeleteProject = (projectId) => {
    setProjects(prevProjects => prevProjects.filter(project => prevProjects.indexOf(project) !== projectId));
    setSelectedProject(null);
  };

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          projects={projects}
          handleProjectClick={handleSelectProject}
          handleAddProjectClick={toggleNewProjectView}
        />
        {(!isNewProjectView && !selectedProject) &&
          <div className="flex flex-col items-center w-full">
            <img className="w-16 h-16 object-contain mx-auto" src={noProjectsImg} alt="Project list" />
            <h2 className="text-xl font-bold text-stone-700 my-4">
              No project selected
            </h2>
            <p className="text-stone-600 mb-4">Select a project or get started with a new one</p>
            <Button
              className={'px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'}
              onClick={toggleNewProjectView}
            >
              Create new project
            </Button>
          </div>
        }
        {isNewProjectView &&
          <NewProject
            handleCancel={toggleNewProjectView}
            handleSave={handleSaveProject}
          />
        }
        {selectedProject &&
          <Project
            project={selectedProject}
            handleDelete={handleDeleteProject}
          />
        }
      </main>
    </>
  );
}

export default App;
