import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Input from "../../components/ui/Input";
import { useState } from "react";
function Projects() {
    const [projectName, setProjectName] = useState("");
    function handleChange(event){
        setProjectName(event.target.value);
        }
  return (
    <div>
      <h1>Projects</h1>
      <Button text="Create Project" />
      <Button text="Save" variant="secondary" />
      <Button text="Delete" variant="danger" />

        <Input type="text" placeholder="Enter project name" value={projectName} onChange={handleChange} />
        <Card>
            <h2>Project 1</h2>
            <Badge text="Active" status="active" />
            <Button text="View Project" />
        </Card>
    </div>
  );
}

export default Projects;