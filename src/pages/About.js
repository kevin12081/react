import React from "react";

const About = () => {
  return (
    <div style={{ minHeight: "92vh" }}>
      <div className="title">
        <h1>About The Website</h1>
      </div>

      <div className="content">
        <h1>
          這是一個練習React所製作的網站，使用了
          <a target="_blank" href="https://www.pexels.com/zh-tw/">
            Pexels
          </a>
          的API
        </h1>
      </div>
    </div>
  );
};

export default About;
