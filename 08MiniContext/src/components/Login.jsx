import React from "react";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, SetUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault;
    setUser({username,password})
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text "

        value={username}
        onChange={(e) => SetUsername(e.target.value)}
        placeholder="username"
      />
      {' '}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
