import React, { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import "./signin.styles.scss";
import Button from "../../button/button.component.jsx";
import FormInput from "../../form-input/form-input.component";

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
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log(response);
      setFormValues(defaultFormValues);
    } catch (error) {
      if(error.code === "auth/wrong-password"){
        alert("Invalid Password");
      }
      else if(error.code === "auth/user-not-found"){
        alert("Invalid UserName");
      }
    }
  };

  return (
    <div className="signin-container">
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
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={googleSignInHandler}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInFrom;
