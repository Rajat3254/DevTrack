import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
function ProjectCard({ project }) {
    return (
        <Card>
            <h2>{project.name}</h2>
            <Badge text={project.status} status={project.status} />
            <Button text="View project"/>
        </Card>
    );
    }
export default ProjectCard;