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
  NETFLIX_GEMINI,
  YOUTUBE_APP_GITHUB_LINK,
  SWIGGY_STORE_GITHUB_LINK,
} from "./constants";


const getProjectDetails = (githubUrl) => {
  if (githubUrl === DEVTINDER_GITHUB_LINK) {
    return {
      title: "DevTinder",
      description: "A platform for developers to connect and collaborate.",
    };
  } else if (githubUrl === NETFLIX_GEMINI) {
    return {
      title: "Netflix Gemini",
      description: "A Netflix clone with a responsive UI and real-time data.",
    };
  } else if (githubUrl === YOUTUBE_APP_GITHUB_LINK) {
    return {
      title: "YouTube App",
      description: "A clone of YouTube with search and video playback features.",
    };
  } else if (githubUrl === SWIGGY_STORE_GITHUB_LINK) {
    return {
      title: "Swiggy Store",
      description: "An online food delivery application inspired by Swiggy.",
    };
  }
  return {
    title: "Unknown Project",
    description: "Description not available.",
  };
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
  ];

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
                    Explore some of the projects I have worked on, showcasing my
                    skills in design, development, and implementation.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                          {projects.map((project, index) => {
                            const { title, description } = getProjectDetails(
                              project.githubUrl
                            );
                            return (
                              <ProjectCard
                                key={index}
                                title={title}
                                description={description}
                                imgUrl={project.imgUrl}
                                githubUrl={project.githubUrl}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
