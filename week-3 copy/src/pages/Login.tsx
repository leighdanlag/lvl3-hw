import { useState, useEffect } from "react";
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
  const [remember, setRemember] = useState(false);

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

    if (remember) {
      localStorage.setItem("rememberedUser", username);
    } else {
      localStorage.removeItem("rememberedUser");
    }

    login(username);
    navigate("/dashboard");
    
  }

  //useEffect runs after render
  useEffect(() => {
    const remembered = localStorage.getItem("rememberedUser");
    if (remembered && username) setUsername(remembered);
  });

  return (
    <div className="flex items-center min-h-screen justify-center">
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
        <div className="flex gap-2">
          <input 
          type="checkbox" 
          id="remember" 
          checked={remember} 
          onChange={(e) => setRemember(e.target.checked)}
          />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <button onClick={validateUser}>Submit</button>
      </div>
    </div>
  );
};