import { useState } from "react";
import { redirect } from "react-router";

/**
 * username: string;
 * password: string;
 * isLoggedIn: boolean;
 */

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  function validateUser() {
    if (
      username !== localStorage.getItem("username") ||
      password !== localStorage.getItem("password")
    ) {
      setError("Check credentials");
      return null;
    }


    return redirect("/home");
  }

  return (
    <>
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
    </>
  );
};
