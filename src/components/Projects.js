import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

function Projects() {
  const [listProjects] = useState([
    {
      name: "Urban Zaika",
      des: "Urban Zaika is a fast food outlet offering unique, flavorful dishes. This project involved building a user-friendly website to showcase the menu, provide detailed dish descriptions, and enable seamless online ordering. The site enhances customer experience with intuitive navigation and a modern design.",
      language: "HTML5, CSS3, React JS",
      images: "/UBZ.mp4", // Video file path
    },
    {
      name: "Hospital Management System",
      des: "A Hospital Management System (HMS) streamlines hospital operations by managing patient information, appointments, medical history, billing, and inventory. It ensures efficient healthcare service delivery by tracking doctor schedules, staff roles, and laboratory tests. The system provides real-time analytics, generates reports, and maintains data security, improving hospital productivity and patient care.",
      mission: "Back-end Developer, system analysis and design",
      language: "HTML5, CSS3, React JS, Expresss.js",
      images: "/project2.PNG", // Image file path
    },
    {
      name: "Redefined Gaming",
      des: "Gaming Hub is a dynamic platform designed for gaming enthusiasts, offering the latest updates, reviews, and news from the gaming world. This project includes interactive features such as game ratings, forums, and live streams to foster community engagement. The website delivers a seamless and immersive experience for gamers of all levels.",
      mission: "Back-end Developer, system analysis and design",
      language: "HTML5, CSS3, React JS, Express.Js",
      images: "/game.mp4", // Video file path
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        MY Work
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Crafting innovative solutions with precision and expertise, where each
        project reflects a commitment to excellence and transformative results.
        From concept to completion, we turn your ideas into impactful realities.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className="images">
              {value.images.endsWith(".mp4") ? (
                <video width="100%" height="auto" controls loop autoPlay muted>
                  <source src={value.images} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={value.images} alt="" />
              )}
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
