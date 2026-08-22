import ProjectCard from "../../components/common/ProjectCard";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState } from "react";
function Projects() {
    const [error, setError] = useState("");
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
    function handleCancel() {
        setEditingProjectId(null);
        setProjectName("");
        setError("");
    }
    function handleEdit(id){
        setEditingProjectId(id)
        const projectToEdit=projects.find(p=>p.id===id)
        setProjectName(projectToEdit.name)
        }
    function handleSave(){
        setProjects(prevProjects=>prevProjects.map((p)=>(p.id===editingProjectId)?{...p,name:projectName}:p))
        setEditingProjectId(null)
        setProjectName("")
        }
    function handleCreateProject(){
            setProjects(prevProjects=>[...prevProjects,{id:prevProjects.length+1, name:projectName, status:"active"}])
            setProjectName("")
        }
    function handleChange(event){
        setProjectName(event.target.value);
        setError("");
        }
    function handleSubmit(event) {
        event.preventDefault();

        if (projectName.trim() === "") {
            setError("Project name cannot be empty");
            return;
        }

        if (projectName.trim().length > 50) {
            setError("Project name must be 50 characters or less");
            return;
        }

        setError("");

        if (editingProjectId !== null) {
            handleSave();
        } else {
            handleCreateProject();
        }
    }
  return (
    <div>
      <h1>Projects</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Enter project name" value={projectName} onChange={handleChange} />
        {error && <p>{error}</p>}
        {editingProjectId !== null ? (
                <>
                    <Button type="submit" text="Save" />
                    <Button
                        type="button"
                        text="Cancel"
                        onClick={handleCancel}
                    />
                </>
            ) : (
                <Button type="submit" text="Create Project" />
            )}
        </form>
        {projects.length===0?<h2>No Projects Found</h2>:projects.map(p=>(<ProjectCard key={p.id} project={p} onDelete={handleDelete} onEdit={handleEdit}/>))}
    </div>
  );
}

export default Projects;