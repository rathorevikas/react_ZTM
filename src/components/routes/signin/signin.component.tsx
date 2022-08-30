import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
// import {
//   signInUserWithEmailAndPassword,
//   signInWithGooglePopup,
// } from "../../utils/firebase/firebase.utils";
import Button from "../../button/button.component";
import FormInput from "../../form-input/form-input.component";
import { BUTTON_TYPE_CLASSES } from "../../button/button.component";
import { ButtonsContainer, SigninContainer } from "./signin.styles";
import { emailSignInStart, googleSignInStart } from "../../../store/user/user.action";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignInFrom = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { email, password } = formValues;

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const googleSignInHandler = async () => {
    // await signInWithGooglePopup();
    dispatch(googleSignInStart());
  };

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // await signInUserWithEmailAndPassword(email, password);
      dispatch(emailSignInStart(email,password))
      setFormValues(defaultFormValues);
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert("incorrect password for email");
          break;
        case AuthErrorCodes.INVALID_EMAIL:
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <SigninContainer>
      <h2>I already have an Account</h2>
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
