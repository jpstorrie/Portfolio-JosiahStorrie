import Project from "./Components/Project.js";
import './App.css';
import {useEffect, useState} from "react"

function App() {
  const [projects, setProjects] = useState(null)

  useEffect(()=>{
    fetch(" http://localhost:3000/projects")
    .then((r)=>r.ok ? r.json().then(setProjects) : console.log("Fetch Failed, check if server is running..."))
  },[])

  console.log(projects || projects.map(project=>{console.log(project.id)}))
  return (
    <div className="App">
      <h1>projects</h1>
      {/* {projects || projects.map(project=>{<Project project={project} key={project.id}/>})} */}
    </div>
  );
}

export default App;
