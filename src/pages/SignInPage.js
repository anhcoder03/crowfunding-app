import useToggleValue from "hooks/useToggleValue";
import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import Input from "components/input/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { IconEyeToggle } from "components/icons";
import { Field } from "components/field";
import { Button } from "components/button";

const SignInPage = () => {
  const schema = yup
    .object({
      email: yup.string().email(" ").required("This field is required"),
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
  const { value: showPassword, handleToggleValue: handleShowPassword } =
    useToggleValue();
  const handleLogin = (values) => {
    console.log(values);
    if (!isValid) return;
  };
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text3">
        Dont have an account?{" "}
        <Link to={"/sign-up"} className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <button className="flex justify-center w-full py-4 mb-5 text-base font-semibold border rounded-lg gap-x-3 iten-center text-text2 border-strock dark:border-darkStroke dark:text-white">
        <img srcSet="/google.png 2x" alt="icon-google" />
        <span>Sign in with google</span>
      </button>
      <form onSubmit={handleSubmit(handleLogin)}>
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
        <div className="mb-5 text-right">
          <Link
            to="/"
            className="inline-block text-sm font-medium text-primary"
          >
            Forgot password
          </Link>
        </div>
        <Button
          type="submit"
          className="w-full bg-primary"
          disabled={isSubmitting}
          isLoading={isSubmitting}
        >
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
