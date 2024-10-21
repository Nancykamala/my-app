import { useRouter } from "@tanstack/router";
import React, { useState } from "react";
import { useAuth } from "../AutContext";

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (
      login(username, password) &&
      username === "Nancy" &&
      password === "Nancy1234"
    ) {
      router.navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div style={{ paddingBottom: "10px" }}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div style={{ paddingBottom: "10px" }}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
