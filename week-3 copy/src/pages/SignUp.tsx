import { useState } from "react";
import { redirect } from "react-router";

function SignUp() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <>
      <input value={user} type="text" onChange={(e) => setUser(e.target.value)}>
        Username
      </input>
      <input value={pass} type="text" onChange={(e) => setPass(e.target.value)}>
        Password
      </input>

      <button
        onClick={() => {
          localStorage.setItem("username", user);
          localStorage.setItem("password", pass);
          localStorage.setItem("isLoggedIn", "true")
          return redirect("/home");
        }}
      >
        Submit
      </button>
    </>
  );
}

export default SignUp;
