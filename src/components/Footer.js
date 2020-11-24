import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="partial">
          <img src="/icon1.png" />{" "}
          <p>
            React makes it <br />
            painless to create <br />
            interactive UIs.
          </p>
        </div>
        <div className="partial">
          <img src="/icon2.png" />{" "}
          <p>
            Build encapsulated <br />
            componentes that <br />
            manage their state.
          </p>
        </div>
        <div className="partial">
          <img src="/icon3.png" />{" "}
          <p>
            A set of immutable <br />
            values are passed to <br />
            the component's.
          </p>
        </div>
        <div className="partial">
          <img src="/icon4.png" />{" "}
          <p>
            Statically-typed <br />
            design to run on <br />
            modern browsers.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;