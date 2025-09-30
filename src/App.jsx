import noProjectsImg from './assets/no-projects.png';
import Sidebar from './components/Sidebar';
import Button from './components/Button';

const projects = [];

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        {!projects.length &&
          <div className="flex flex-col items-center w-full">
            <img className="w-20 h-20" src={noProjectsImg} alt="Project list" />
            <h2 className="text-xl font-bold text-stone-700 my-4">
              No project selected
            </h2>
            <p className="text-stone-600 mb-4">Select a project or get started with a new one</p>
            <Button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
              Create new project
            </Button>
          </div>
        }
      </main>
    </>
  );
}

export default App;
