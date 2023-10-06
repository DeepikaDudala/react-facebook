import React from "react";
import Login from "./Login";
import SignUpPage from "./SignUpPage";

function Home(props) {
  return (
    <>
      <div className="whole-body">
        <div className="d-flex justify-content-center">
          <img
            src="public\Facebook-Logo.wine.svg"
            alt="Facebook"
            width={"240px"}
            height={"84px"}
            className="align-center"
          />
        </div>
        <div className="d-flex justify-content-center">{props.displayPage}</div>
      </div>
    </>
  );
}

export default Home;
