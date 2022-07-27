import React from "react";
import SignInFrom from "../signin/signin.component";
import SignUpFrom from "../signup/signup.component";
import { AuthenticationContainer } from "./authentication.styles";


const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInFrom />
      <SignUpFrom />
    </AuthenticationContainer>
  );
};

export default Authentication;
