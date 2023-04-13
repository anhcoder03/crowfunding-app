import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import LayoutAuthentication from "layout/LayoutAuthentication";
import { Label } from "components/label";
import Input from "components/input/Input";
import { Field } from "components/field";
import { Button } from "components/button";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({});
  const handleSignUp = (values) => {
    console.log(values);
    if (!isValid) return;
  };
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text3">
        Already have an account?{" "}
        <Link to={"/sign-in"} className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex justify-center w-full py-4 mb-5 border rounded-lg gap-x-3 iten-center border-strock">
        <img srcSet="/google.png 2x" alt="icon-google" />
        <span className="text-base font-semibold text-text2">
          Sign up with google
        </span>
      </button>
      <p className="mb-4 text-xs text-center lg:text-sm text-text2 lg:mb-8">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label htmlFor="name">Full Name *</Label>
          <Input name="name" placeholder="Jhon Doe" control={control}></Input>
        </Field>
        <Field>
          <Label htmlFor="email">Email *</Label>
          <Input
            name="email"
            placeholder="example@gmail.com"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password">Password *</Label>
          <Input
            name="password"
            type="password"
            placeholder="Create a password"
            control={control}
          ></Input>
        </Field>
        <div className="flex items-start mb-6 gap-x-5 lg:mb-5">
          <span className="inline-block w-5 h-5 border rounded border-text4"></span>
          <p className="flex-1 text-sm text-text2">
            I agree to the{" "}
            <span className="underline text-secondary">Terms of Use</span> and
            have read and understand the{" "}
            <span className="underline text-secondary">Privacy policy</span>.
          </p>
        </div>
        <Button type="submit" className="w-full bg-primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
