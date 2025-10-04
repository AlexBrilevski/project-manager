import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NoProjectSelected from './components/NoProjectSelected';
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
    setSelectedProject(projects.find(project => project.id === projectId));
    if (isNewProjectView) {
      setIsNewProjectView(false);
    }
  };

  const handleDeleteProject = (projectId) => {
    setProjects(prevProjects => prevProjects.filter(project => project.id !== projectId));
    setSelectedProject(null);
  };

  const handleAddTask = (projectId, title) => {
    setProjects(prevProjects => prevProjects.map(project => project.id === projectId ? { ...project, tasks: [...project.tasks, { title }] } : project));
    setSelectedProject(prevProject => ({ ...prevProject, tasks: [...prevProject.tasks, { title }] }));
  };

  const handleDeleteTask = (projectId, taskIndex) => {
    setProjects(prevProjects => prevProjects.map(project => project.id === projectId ? { ...project, tasks: project.tasks.filter(task => project.tasks.indexOf(task) !== taskIndex) } : project));
    setSelectedProject(prevProject => ({ ...prevProject, tasks: prevProject.tasks.filter(task => prevProject.tasks.indexOf(task) !== taskIndex) }));
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projects}
        handleProjectClick={handleSelectProject}
        handleAddProjectClick={toggleNewProjectView}
      />
      {(!isNewProjectView && !selectedProject) &&
        <NoProjectSelected toggleNewProjectView={toggleNewProjectView} />
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
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
        />
      }
    </main>
  );
}

export default App;
