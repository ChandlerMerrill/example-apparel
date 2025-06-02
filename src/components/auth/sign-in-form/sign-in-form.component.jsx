"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import FormInput from "@/components/form-input/form-input.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "@/components/button/button.component";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

import { signInWithGoogle, signInWithEmail } from "@/store/user/user.thunk";
import { useRedirectAfterLogin } from "@/hooks/useRedirectAfterLogin";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { redirect } = useRedirectAfterLogin();

  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (currentUser?.uid) {
      console.log("redirecting to user destination:", currentUser.uid);
      redirect(currentUser.uid);
    }
  }, [currentUser, redirect]);

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(signInWithEmail({ email, password }));
      setFormFields(defaultFormFields);
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={handleGoogleSignIn}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
