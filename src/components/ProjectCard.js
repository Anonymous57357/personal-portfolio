import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubUrl,
  liveUrl,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={`${title} project`} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            GitHub
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="live-link"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
