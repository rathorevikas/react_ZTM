import React, { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../../button/button.component.jsx";
import FormInput from "../../form-input/form-input.component";
import { BUTTON_TYPE_CLASSES } from "../../button/button.component.jsx";
import { ButtonsContainer, SigninContainer } from "./signin.styles";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignInFrom = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { email, password } = formValues;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const googleSignInHandler = async () => {
    await signInWithGooglePopup();
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      setFormValues(defaultFormValues);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <SigninContainer>
      <h2>I already have an Acoount</h2>
      <span>Sign in with your Email and Password page</span>
      <form onSubmit={formSubmitHandler}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={googleSignInHandler}
          >
            Google Sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SigninContainer>
  );
};

export default SignInFrom;
