"use client";
import SignInForm from "@/components/auth/sign-in-form/sign-in-form.component";
import { AuthenticationContainer } from "./authentication.styles";
import SignUpForm from "@/components/auth/sign-up-form/sign-up-form.component";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
