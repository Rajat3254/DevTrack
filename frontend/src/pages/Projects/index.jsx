import ProjectCard from "../../components/common/ProjectCard";
import Input from "../../components/ui/Input";
import { useState } from "react";
function Projects() {
    const [projectName, setProjectName] = useState("");
    function handleChange(event){
        setProjectName(event.target.value);
        }
    const projects=[
        {id:1, name:"Project 1", status:"active"},
        {id:2, name:"Project 2", status:"pending"},
        {id:3, name:"Project 3", status:"completed"},
        ]
  return (
    <div>
      <h1>Projects</h1>
      <Button text="Create Project" />
      <Button text="Save" variant="secondary" />
      <Button text="Delete" variant="danger" />

        <Input type="text" placeholder="Enter project name" value={projectName} onChange={handleChange} />
        {projects.map(p=>(<ProjectCard key={p.id} project={p} />))}
    </div>
  );
}

export default Projects;