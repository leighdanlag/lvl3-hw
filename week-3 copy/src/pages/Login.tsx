import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

/**
 * username: string;
 * password: string;
 * isLoggedIn: boolean;
 */

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { login } = useAuth();    //grab login prop from useAuth context (AuthContext props)
  const navigate = useNavigate();

  function validateUser() {
    if (
      username !== localStorage.getItem("username") ||
      password !== localStorage.getItem("password")
    ) {
      setError("Check credentials");
      return null;
    }

    login(username);
    navigate("/dashboard");
    
  }

  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-5">
        {error && <p>{error}</p>}
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={validateUser}>Submit</button>
      </div>
    </div>
  );
};