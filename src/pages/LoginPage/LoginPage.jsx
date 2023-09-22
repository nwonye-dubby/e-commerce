import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const BASEURL = "http://localhost:3000";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(BASEURL + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        setError("");
        navigate("/app");
      } else {
        const res = await response.json();
        console.log({ res });
        setError(res.message + ". " + res.error);
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      setError("An error occurred during login");
    }
  };

  const handleSignUpRedirect = () => {
    navigate("/SignUpPage");
  };

  const handleHomeRedirect = () => {
    navigate("/App");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
      <button onClick={handleSignUpRedirect}>Sign Up</button>
      <button onClick={handleHomeRedirect}>Go to Homepage</button>
    </div>
  );
}

export default LoginPage;
