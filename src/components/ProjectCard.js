import { Col } from "react-bootstrap";

// ProjectCard

export const ProjectCard = ({ title, description, imgUrl }) => {

  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="imageurl" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
