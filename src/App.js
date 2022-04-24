import React, { useState, useEffect } from "react";
// import { v4 as uuid } from 'uuid';
import Credentials from "./serverdata/database.json";
import LoginForm from "./components/LoginForm";
import AppRouter from "./AppRouter";

function App() {

  const adminUser = {
    email: Credentials.user.email,
    password: Credentials.user.password,
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged In");
      localStorage.setItem("login_status ", true);
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Provided Credentials do not match");
      setError("Error");
    }
  };
  const Logout = () => {
    setUser({ name: "", email: "" });
    localStorage.setItem("login_status", false);
  };
  // localStorage.setItem('logginStatus', true)

  return (
    <div>
      {user.email != "" || localStorage.getItem("login_status") == true ? (
        <>
          <div className="welcome">
            <h2 className="welcome-text">
              {" "}
              Welcome, <span>{user.name}</span>{" "}
            </h2>
            <button className="logout" onClick={Logout}>
              Logout
            </button>
            <AppRouter />
          </div>
        </>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;

