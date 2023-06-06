import Project from "./Components/Project.js";
import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(" http://localhost:3000/projects")
      .then((r) => r.ok ? r.json().then(setProjects) : console.log("Fetch Failed, check if server is running..."))
  }, [])

  const projectElements = projects.map((project) =>{return <Project key={project.id} project={project}/>})

  return (
    <div className="App">
      <h1>projects</h1>
      {projectElements}
    </div>
  );
}

export default App;