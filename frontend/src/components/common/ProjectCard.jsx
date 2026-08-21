import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
function ProjectCard({ project ,onDelete ,onEdit}) {
    return (
        <Card>
            <h2>{project.name}</h2>
            <Badge text={project.status} status={project.status} />
            <Button text="View project"/>
            <Button text="Delete" variant="danger" onClick={()=>onDelete(project.id)}/>
            <Button text="Edit" variant="secondary" onClick={()=>onEdit(project.id)}/>
        </Card>
    );
    }
export default ProjectCard;