import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";

function Contacts() {
  const [listContacts] = useState([
    {
      title: "Email",
      value: "syedaffan174@gmail.com",
    },
    {
      title: "Instagram",
      value: "@_a_f_f_a_n_07",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="contacts" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>
      <div
        className="contact_details"
        style={{ display: "flex", marginInline: 20 }}
      >
        <div className="des" ref={(el) => el && divs.current.push(el)}>
          {/* 20 */}
          Have a project in mind or just want to say hello? Feel free to reach
          out! I'm always open to discussing new opportunities, collaborations,
          or any web development challenges you need help with.
        </div>
        <div className="list" ref={(el) => el && divs.current.push(el)}>
          {listContacts.map((value, key) => (
            <div className="item" key={key}>
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Contacts;
