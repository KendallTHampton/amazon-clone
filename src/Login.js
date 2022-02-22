import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    //   FIREBASE LOGIN
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault();
    // FIREBASE REGISTERING

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
        // ..
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1600px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign-in
          </button>
        </form>
        <p>
          By signing-in you agree to the Amazon Clone's Conditions of Use &
          Sale. Please see out Privacy Notice, out Cookies Notice and our
          Interest-Based Ads
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
