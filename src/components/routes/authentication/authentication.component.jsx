import React from "react";
import SignInFrom from "../signin/signin.component";
import SignUpFrom from "../signup/signup.component";
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInFrom />
      <SignUpFrom />
    </div>
  );
};

export default Authentication;
