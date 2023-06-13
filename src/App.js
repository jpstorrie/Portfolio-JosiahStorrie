import Project from "./Components/Project.js";
import About from "./Components/about.js";
import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(" http://localhost:3000/projects")
      .then((r) => r.ok ? r.json().then(setProjects) : console.log("Fetch Failed, check if server is running..."))
  }, [])

  const projectElements = projects.map((project) => { return <Project key={project.id} project={project} /> })

  return (
    <div className="App">
      <nav className="h-11 rounded-b-lg navbg">
        <ol className="flex p-2 justify-around">
          <li><a href="#">About Me</a></li>
          <li><a href="#">Technical Projects</a></li>
          <li><a href="#">Resume</a></li>
        </ol>
      </nav>
      <About />
      <h1>projects</h1>
      {projectElements}
    </div>
  );
}

export default App;