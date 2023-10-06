import React from 'react'
import { Link } from 'react-router-dom';
import FormEmail from './Form/FormEmail';
import FormButton from './Form/FormButton';

function FindYourAccount() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card-div">
          <h5 className="fs-5 fw-bold">Find Your Account</h5>
          <hr />
          <p>
            Please enter your email address or mobile number to search for your
            account.
          </p>
          <form>
            <FormEmail />
          </form>
          <div className="d-flex justify-content-end">
            <button className="btn btn-light mx-3 ">
              <Link to="/login">Cancel</Link>
            </button>
            <FormButton className="btn btn-primary" text="Search" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FindYourAccount