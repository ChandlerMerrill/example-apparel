"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "@/components/form-input/form-input.component";
import Button from "@/components/button/button.component";

import { SignUpContainer } from "./sign-up-form.styles";
import { useRouter } from "next/navigation";
import { signInWithGoogle, signUp } from "@/store/user/user.thunk";

const defaultFormFields = {
  nameFirst: "",
  nameLast: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { nameFirst, nameLast, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // unwrap() makes dispatch return the actual payload or throw the reject value,
      // letting you keep the try/catch entirely in the component.
      console.log("nameFirst from ui:", nameFirst);
      await dispatch(signUp({ email, password, nameFirst, nameLast })).unwrap();

      resetFormFields();
    } catch (err) {
      if (err === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.error("User creation encountered an error:", err);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="First Name"
          type="text"
          required
          onChange={handleChange}
          name="nameFirst"
          value={nameFirst}
        />
        <FormInput
          label="Last Name"
          type="text"
          required
          onChange={handleChange}
          name="nameLast"
          value={nameLast}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
