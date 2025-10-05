import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NoProjectSelected from './components/NoProjectSelected';
import NewProject from './components/NewProject';
import Project from './components/Project';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const enableNewProjectView = () => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleCancelProject = () => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  const handleSaveProject = (projectData) => {
    const newProject = { id: Date.now(), tasks: [], ...projectData };

    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    }));
  };

  const handleSelectProject = (projectId) => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  };

  const handleDeleteProject = (projectId) => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(project => project.id !== projectId),
    }));
  };

  const handleAddTask = (projectId, title) => {
    setProjectsState(prevState => ({
      ...prevState,
      projects: prevState.projects.map(project => project.id === projectId ?
        { ...project, tasks: [...project.tasks, { title }] } : project),
    }));
  };

  const handleDeleteTask = (projectId, taskIndex) => {
    setProjectsState(prevState => ({
      ...prevState,
      projects: prevState.projects.map(project => project.id === projectId ?
        { ...project, tasks: project.tasks.filter(task => project.tasks.indexOf(task) !== taskIndex) } : project),
    }));
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projectsState.projects}
        handleProjectClick={handleSelectProject}
        handleAddProjectClick={enableNewProjectView}
      />
      {projectsState.selectedProjectId === undefined &&
        <NoProjectSelected handleAddProjectClick={enableNewProjectView} />
      }
      {projectsState.selectedProjectId === null &&
        <NewProject
          handleCancel={handleCancelProject}
          handleSave={handleSaveProject}
        />
      }
      {projectsState.selectedProjectId &&
        <Project
          project={projectsState.projects.find(project => project.id === projectsState.selectedProjectId)}
          handleDelete={handleDeleteProject}
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
        />
      }
    </main>
  );
}

export default App;
