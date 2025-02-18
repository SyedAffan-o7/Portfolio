import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "The foundation of web development, used to structure content on the web. Proficient in semantic HTML, ensuring accessibility and SEO-friendly markup.",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "Expertise in styling web pages with CSS, including Flexbox, Grid, animations, and responsive design to create visually appealing and user-friendly interfaces.",
      icon: faCss3,
    },
    {
      name: "JavaScript",
      des: "Strong proficiency in JavaScript, enabling dynamic and interactive web applications. Skilled in ES6+, DOM manipulation, event handling, and asynchronous programming.",
      icon: faJs,
    },
    {
      name: "React.js",
      des: "Experienced in building modern UI components using React.js. Proficient in hooks, state management, performance optimization, and integrating APIs for dynamic applications.",
      icon: faReact,
    },
    {
      name: "Node.js",
      des: "Backend development expertise with Node.js, handling server-side logic, RESTful APIs, authentication, and real-time applications using Express.js and database integration.",
      icon: faNodeJs,
    },
    {
      name: "Python",
      des: "Skilled in Python for backend development, data processing, and automation. Experience with frameworks like Django and Flask for scalable web applications.",
      icon: faPython,
    },
  ]);

  return (
    <section className="skills" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur
        consequatur quisquam harum.
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div
            className={"item "}
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
