import React from "react";

function SayHello() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="navBar">
            <img src="/ironhack-logo.svg" className="logo" />
            <img src="/menu-top.svg" className="options" />
        </div>
        <br/>
        <h1>
          Say hello to
          <br /> ReactJS
        </h1>
        <p>
          You will learn how to use <br />
          the most popular frontend library,
          <br />
          and become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
    </React.Fragment>
  );
}

export default SayHello;
