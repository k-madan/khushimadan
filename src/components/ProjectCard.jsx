import { Link } from "react-router-dom";

function ProjectCard({ title, subtitle, image, color, className, link }) {
  return (
    <Link
      to={link}
      className={`project-card ${className}`}
      style={{ backgroundColor: color }}
    >
      <div className="project-info">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>

      <img src={image} alt={title} />
    </Link>
  );
}

export default ProjectCard;