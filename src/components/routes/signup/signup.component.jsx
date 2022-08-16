import React, { useState } from "react";
// import {
//   createAuthUserWithEmailAndPassword,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";
import Button from "../../button/button.component.jsx";
import FormInput from "../../form-input/form-input.component";
import { SignupContainer } from "./signup.styles.jsx";
import { useDispatch } from "react-redux/es/exports";
import { signUpStart } from "../../../store/user/user.action";

const defaultFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpFrom = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { displayName, email, password, confirmPassword } = formValues;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));

      // const { user } = await createAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      // await createUserDocumentFromAuth(user, { displayName });

      setFormValues(defaultFormValues);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email already in use");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <SignupContainer>
      <h2>Do not have an Account ?</h2>
      <span>SignUp with your Email and Password</span>
      <form onSubmit={formSubmitHandler}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </SignupContainer>
  );
};

export default SignUpFrom;
