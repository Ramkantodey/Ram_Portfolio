import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Imagify ✨",
      description: "React, Tailwind, Node.js, Express, MongoDB, ClipDrop API, JWT Auth",
      imgUrl: projImg1,
      liveLink: "https://imagify-ramkanto-dey.vercel.app",
      sourceLink: "https://github.com/Ramkantodey/Imagify-Ramkanto-Dey",
    },
    {
      title: "Discount PRO 🛍️",
      description: "React, Tailwind, Firebase Auth, JSON Data, React Router, Firebase Hosting",
      imgUrl: projImg2,
      liveLink: "https://assignment-9-285e6.web.app",
      sourceLink: "https://github.com/Ramkantodey/discount-pro",
    },
    {
      title: "GadgetHeaven 📱",
      description: "React, Context API, LocalStorage, React Router, Figma UI",
      imgUrl: projImg3,
      liveLink: "https://gadget-heaven-1.netlify.app",
      sourceLink: "https://github.com/Ramkantodey/Gadget-Heaven",
    },
    {
      title: "🌿OrganicWeb",
      description: "HTML, Tailwind CSS, Responsive eCommerce Site Design",
      imgUrl: projImg4,
      liveLink: "https://ramkantodey.github.io/organic-websites",
      sourceLink: "https://github.com/Ramkantodey/organic-websites",
    },
    {
      title: "PetAdopt 🐾",
      description: "Dynamic pet adoption site using HTML, CSS, JS, API, and ES6+ features",
      imgUrl: projImg5,
      liveLink: "https://petadooption.netlify.app",
      sourceLink: "https://github.com/Ramkantodey/Pets-adoption",
    },
    {
      title: "BPL-DREAM-!! 🏏",
      description: "React, Tailwind CSS, JavaScript, React Toastify, JSON Player Data",
      imgUrl: projImg6,
      liveLink: "https://bpl-dreams-11.netlify.app",
      sourceLink: "https://github.com/Ramkantodey/BPL-drems",
    },
    {
      title: "Recipe Queue App 🍳",
      description: "React, Tailwind CSS, Font Awesome, JSON",
      imgUrl: projImg7,
      liveLink: "https://grand-toffee-chefstable.netlify.app",
      sourceLink: "https://github.com/Ramkantodey/Chefs-Table",
    },
    {
      title: "Gamer Project 🎮",
      description: "HTML, CSS, Responsive Design, Layout & Styling",
      imgUrl: projImg8,
      liveLink: " https://ramkantodey.github.io/gamer-project",
      sourceLink: "https://github.com/Ramkantodey/gamer-project",
    },
    {
      title: "House Design🏡",
      description: "Rustic & Modern Aesthetic, Residential & Commercial Spaces, Thoughtful Planning",
      imgUrl: projImg9,
      liveLink: "https://ramkantodey.github.io/assignment---3/",
      sourceLink: "https://github.com/Ramkantodey/assignment---3",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of the projects I have worked on.</p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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

                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                      {/* Tab 1: Projects 0-2 */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.slice(0, 3).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Tab 2: Projects 3-5 */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.slice(3, 6).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Tab 3: Projects 6-8 */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.slice(6, 9).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
}
