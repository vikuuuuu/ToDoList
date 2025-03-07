import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box"> 
        <h2>Login</h2>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="username">Email</label>
            <input type="text" id="username" required autoComplete="off"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
}

export default Login;
