import React from "react";

function SayHello() {
  return (
    <React.Fragment>
      <img src='/react-logo.svg' />  
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use <br />
        the most popular frontend library,
        <br />
        and become a super Ninja developer.{" "}
      </p>
      <button>Awesome!</button>
    </React.Fragment>
  );
}

export default SayHello;