import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

import {
  DEVTINDER_GITHUB_LINK,
  SWIGGY_STORE_GITHUB_LINK,
  NETFLIX_GEMINI,
  YOUTUBE_APP_GITHUB_LINK,
  NETFLIX_GEMINI_LIVE_URL,
  YOUTUBE_APP_LIVE_URL,
  DEVTINDER_LIVE_URL,
  SWIGGY_STORE_LIVE_URL,
} from "./constants";

// Generate title, description, and live URL based on GitHub URL
const getProjectDetails = (githubUrl) => {
  switch (githubUrl) {
    case DEVTINDER_GITHUB_LINK:
      return {
        title: "Dev Tinder",
        description: "A Tinder-inspired app for developers to connect.",
        liveUrl: DEVTINDER_LIVE_URL,
      };
    case SWIGGY_STORE_GITHUB_LINK:
      return {
        title: "Swiggy Store",
        description: "A clone of Swiggy's core features with React.",
        liveUrl: SWIGGY_STORE_LIVE_URL,
      };
    case NETFLIX_GEMINI:
      return {
        title: "Netflix Gemini",
        description:
          "A Netflix-inspired streaming platform with Gemini integration.",
        liveUrl: NETFLIX_GEMINI_LIVE_URL,
      };
    case YOUTUBE_APP_GITHUB_LINK:
      return {
        title: "YouTube App",
        description: "A YouTube clone built with React and Redux.",
        liveUrl: YOUTUBE_APP_LIVE_URL,
      };
    default:
      return {
        title: "Project",
        description: "No description available.",
        liveUrl: null,
      };
  }
};

export const Projects = () => {
  const projects = [
    {
      imgUrl: projImg1,
      githubUrl: DEVTINDER_GITHUB_LINK,
    },
    {
      imgUrl: projImg2,
      githubUrl: NETFLIX_GEMINI,
    },
    {
      imgUrl: projImg3,
      githubUrl: YOUTUBE_APP_GITHUB_LINK,
    },
    {
      imgUrl: projImg1,
      githubUrl: SWIGGY_STORE_GITHUB_LINK,
    },
  ].map((project) => ({
    ...project,
    ...getProjectDetails(project.githubUrl),
  }));

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore a variety of projects showcasing development skills,
                    creativity, and functionality.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">In Progress</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Completed</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Projects currently under development will appear here.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Completed projects showcasing diverse skills.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
