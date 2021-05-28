import React from "react";
import style from "../styles/login.module.css";

const Login = ({register, setRegister, handleChange, handleSubmit}) => {
  return (
    <div className={style.container}>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <input name="mail" onChange={handleChange}type="email" placeholder="Email" required></input>
        <input name="password" onChange={handleChange}type="password" placeholder="Password" required></input>
        <input className={style.button} type="submit"></input>
      </form>
      <span
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          e.preventDefault();
          setRegister(!register);
        }}
      >
        ¿No tiene cuenta? Registrese
      </span>
    </div>
  );
};

export default Login;
