import React, { useRef } from "react";
import CustomHook from "./CustomHook";
function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
          MY NAME IS <span>AFFAN</span>
        </div>
        <h1>@ Where creativity meets Competence</h1>
        <div className="des">
          {/* 30 */}
          Passionate and results-driven Web Developer with 1+ years of
          experience in building scalable web applications. Proficient in MERN
          stack, SQL development, WordPress, and Shopify, with expertise in
          backend development, database optimization, and API integrations
        </div>

        <a
          href="/Affan_R2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="animation active "
        >
          Download My CV
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="/avatar2.jpeg" alt="" />
          <div className="info">
            <div>Developer</div>
            <div>Perfectionist</div>
            <div>01/06</div>
            <div>Male</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
