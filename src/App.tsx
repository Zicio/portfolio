import Navigation from "./components/Navigation/Navigation";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <Navigation />
      <Title />
      <main className="section">
        <ProjectsList />
      </main>
    </>
  );
}

export default App;
