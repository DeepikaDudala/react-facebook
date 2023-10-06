import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormEmail from "./Form/FormEmail";
import FormPassword from "./Form/FormPassword";
import FormButton from "./Form/FormButton";
import LinkPage from "./LinkPage";
function Login() {
  const [findUser, setFindUser] = React.useState({
    email: "",
    password: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFindUser((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(findUser);
    alert("success");
    event.target.reset();
  }
  return (
    <div>
      <div className="card-div">
        <center>
          <h5 className="py-2">Log in to Facebook</h5>
        </center>
        <form onSubmit={handleSubmit}>
          <FormEmail name={"email"} handleChange={handleChange} />
          <FormPassword name={"password"} handleChange={handleChange} />

          <FormButton
            className="btn btn-primary w-100 fw-bold "
            text="Log in"
          />
        </form>
        <div className="mt-4 d-flex justify-content-center">
          <LinkPage to="/login/findyouraccount" text="Forgotten account?" />
          <LinkPage to="/" text="Sign up for Facebook" />
        </div>
      </div>
    </div>
  );
}

export default Login;
