import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage />}></Route>
      <Route path="/sign-in" element={<SignInPage />}></Route>
    </Routes>
  );
}

export default App;
