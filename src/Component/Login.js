import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handlelogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log("result");
        if (result.data === "Login Success") {
          window.location = "/";
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handlelogin}>
          <div className="input-group">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="username"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
