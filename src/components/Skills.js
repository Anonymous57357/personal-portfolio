import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a dedicated software developer, I have honed a diverse set of
                skills that empower me to create impactful web applications.
                From mastering front-end technologies like React.js and Tailwind
                CSS to building robust back-end solutions using Node.js and
                Express.js, I thrive in crafting efficient, scalable, and
                user-friendly solutions. Additionally, I have experience in
                database management, API development, and deploying projects
                with CI/CD pipelines to deliver seamless applications.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Web Development Skill Meter" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="React.js Skill Meter" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Redux Toolkit Skill Meter" />
                  <h5>Redux Toolkit</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Node.js Skill Meter" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Express.js Skill Meter" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="MongoDB Skill Meter" />
                  <h5>MongoDB (NoSQL Database)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="MySQL and PostgreSQL Skill Meter" />
                  <h5>MySQL & PostgreSQL (SQL Databases)</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Tailwind CSS Skill Meter" />
                  <h5>Tailwind CSS (Utility-First Framework)</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Git Version Control Skill Meter" />
                  <h5>Git (Version Control)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="API Development Skill Meter" />
                  <h5>API Development (REST)</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Deployment and CI/CD Skill Meter" />
                  <h5>Deployment & CI/CD (Netlify, Render)</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Unit Testing Skill Meter" />
                  <h5>Unit Testing (Jest)</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
