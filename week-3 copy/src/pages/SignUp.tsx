import { useState } from "react";
import { useNavigate, Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function SignUp() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const { login, isLoggedIn } = useAuth();

  if (isLoggedIn) return <Navigate to="/dashboard" replace/>;

  return (
    <div className="flex items-center min-h-screen justify-center">
      <div className="flex flex-col gap-5">
        <input value={user} type="text" onChange={(e) => setUser(e.target.value)} placeholder="Username" />
        <input value={pass} type="text" onChange={(e) => setPass(e.target.value)} placeholder="Password" />

        <button
          onClick={() => {
            localStorage.setItem("username", user);
            localStorage.setItem("password", pass);
            login(user);
            navigate("/dashboard");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SignUp;