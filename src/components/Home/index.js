import React from "react";
import Header from "../Header";
import Avatar from "../Avatar";

const Home = () => (
  <div>
    <Header />
    <div>
      <h1>Paulo Teixeira</h1>
      <h2>Front-end developer</h2>
      <p>Estudante do curso Web Front end & React na Let’s Code.</p>
    </div>
    <div>
      <a href="https://github.com/paulinhoteixeira">Projects</a>
      <a href="https://onedrive.live.com/download?cid=ED0414E82EC975AE&resid=ED0414E82EC975AE%213273&authkey=AKzzycjT5C2rYm0&em=2">
        Download CV
      </a>
    </div>
    <Avatar/>
  </div>
  
);

export default Home;
