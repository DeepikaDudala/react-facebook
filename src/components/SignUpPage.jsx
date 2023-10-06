import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import FormText from "./Form/FormText";
import FormInfo from "./Form/FormInfo";
import FormEmail from "./Form/FormEmail";
import FormButton from "./Form/FormButton";
import FormRadio from "./Form/FormRadio";
import FormDate from "./Form/FormDate";
import FormInputText from "./Form/FormInputText";
import FormPassword from "./Form/FormPassword";
import LinkPage from "./LinkPage";
import { useDispatch, useSelector } from "react-redux";
import { submitForm, updateField } from "../redux/signUpFormSlice";

function SignUpPage() {
  const formData = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch(updateField({ [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(submitForm(formData));
    event.target.reset();
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="card-div">
          <center>
            <h2>Create a new account</h2>
            <p>it's quick and easy.</p>
          </center>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="w-50">
                <FormInputText
                  placeholder="First name"
                  name="firstName"
                  handleChange={handleChange}
                />
              </div>
              <div className="w-50 ">
                <FormInputText
                  placeholder="Last name"
                  name={"lastName"}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <FormEmail name={"email"} handleChange={handleChange} />
            <FormPassword name="password" handleChange={handleChange} />
            <FormInfo
              text="Date of Birth"
              title="Providing your birthday helps make sure that you get the right Facebook experience for your age. If you want to change who sees this, go to the About section of your profile. For more details, please visit our Privacy Policy."
            />
            <FormDate handleChange={handleChange} />
            <FormInfo
              text={"Gender"}
              title={
                "You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say."
              }
            />
            <div className="row mt-2 ">
              <FormRadio
                className="col-3 ms-3 me-2 radiobut-lab"
                htmlFor="female"
                labeltext="Female"
                name="gender"
                id="female"
                value={"female"}
                handleChange={handleChange}
              />
              <FormRadio
                className="col-3 mx-3 radiobut-lab"
                htmlFor="male"
                labeltext="Male"
                name="gender"
                id="male"
                value={"male"}
                handleChange={handleChange}
              />
              <FormRadio
                className="col-3 mx-3  radiobut-lab"
                htmlFor="custom"
                labeltext="Custom"
                name="gender"
                id="custom"
                value={"custom"}
                handleChange={handleChange}
              />
            </div>
            <FormText text="People Who you may have uploaded your contact information to Facebook. Learn more" />
            <FormText text="By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time." />
            <FormButton
              className="btn w-50 my-3 text-white fw-bold fs-5"
              style={{ backgroundColor: "#00a400" }}
              text={"Sign Up"}
            />
          </form>
          <LinkPage to="/login" text="Already have an account?" />
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
