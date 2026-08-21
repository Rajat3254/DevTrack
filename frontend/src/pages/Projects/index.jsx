import ProjectCard from "../../components/common/ProjectCard";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState } from "react";
function Projects() {
    const [projectName, setProjectName] = useState("");
    const [editingProjectId, setEditingProjectId] = useState(null);
    const [projects, setProjects] = useState([
                                                     {id:1, name:"Project 1", status:"active"},
                                                     {id:2, name:"Project 2", status:"pending"},
                                                     {id:3, name:"Project 3", status:"completed"},
                                                 ])

    function handleDelete(id){
            setProjects(prevProjects=>(prevProjects.filter((p)=>(p.id!==id))))
        }
    function handleEdit(id){
        setEditingProjectId(id)
        const projectToEdit=projects.find(p=>p.id===id)
        setProjectName(projectToEdit.name)
        }
    function handleSave(){
        setProjects(prevProjects=>prevProjects.map((p)=>(p.id===editingProjectId)?{...p,name:projectName}:p))
        setEditingProjectId(null)
        }
    function handleCreateProject(){
            setProjects(prevProjects=>[...prevProjects,{id:prevProjects.length+1, name:projectName, status:"active"}])
        }
    function handleChange(event){
        setProjectName(event.target.value);
        }
  return (
    <div>
      <h1>Projects</h1>
        <Input type="text" placeholder="Enter project name" value={projectName} onChange={handleChange} />
        {editingProjectId !== null
            ? <Button text="Save" onClick={handleSave}/>
            : <Button text="Create Project" onClick={handleCreateProject}/>
        }
        {projects.length===0?<h2>No Projects Found</h2>:projects.map(p=>(<ProjectCard key={p.id} project={p} onDelete={handleDelete} onEdit={handleEdit}/>))}
    </div>
  );
}

export default Projects;