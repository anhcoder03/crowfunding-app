import useToggleValue from "hooks/useToggleValue";
import React from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import Input from "components/input/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { IconEyeToggle } from "components/icons";
import { Field } from "components/field";
import { Checkbox } from "components/checkbox";
import { Button } from "components/button";

const SignUpPage = () => {
  const schema = yup
    .object({
      name: yup.string().required("This field is required"),
      email: yup
        .string()
        .email("Invalid email address")
        .required("This field is required"),
      password: yup
        .string()
        .required("This field is required")
        .min(8, "Password must be 8 character "),
    })
    .required();
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const handleSignUp = (values) => {
    console.log(values);
    if (!isValid) return;
  };
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleShowPassword } =
    useToggleValue();
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text3">
        Already have an account?{" "}
        <Link to={"/sign-in"} className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex justify-center w-full py-4 mb-5 text-base font-semibold border rounded-lg gap-x-3 iten-center text-text2 border-strock dark:border-darkStroke dark:text-white">
        <img srcSet="/google.png 2x" alt="icon-google" />
        <span>Sign up with google</span>
      </button>
      <p className="mb-4 text-xs text-center lg:text-sm text-text2 lg:mb-8 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            name="name"
            placeholder="Jhon Doe"
            control={control}
            error={errors.name?.message}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="email">Email *</Label>
          <Input
            name="email"
            placeholder="example@gmail.com"
            control={control}
            error={errors.email?.message}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password">Password *</Label>
          <Input
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Create a password"
            control={control}
            error={errors.password?.message}
          >
            <IconEyeToggle
              onClick={handleShowPassword}
              open={showPassword}
            ></IconEyeToggle>
          </Input>
        </Field>
        <div className="flex items-start mb-6 gap-x-5 lg:mb-5">
          <Checkbox onClick={handleToggleTerm} checked={acceptTerm} name="term">
            <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use</span> and
              have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy</span>.
            </p>
          </Checkbox>
        </div>
        <Button
          type="submit"
          className="w-full"
          kind="primary"
          disabled={isSubmitting}
          isLoading={isSubmitting}
        >
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
