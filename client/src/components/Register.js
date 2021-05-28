import React from "react";
import style from "../styles/login.module.css";

const Register = ({ register, setRegister, handleChange, handleSubmit }) => {
  return (
    <div className={style.container}>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <input name="name" onChange={handleChange} type="text" placeholder="Nombre" required></input>
        <input name="lastName" onChange={handleChange} type="text" placeholder="Apellido" required></input>
        <input autoComplete="false" name="mail" onChange={handleChange} type="email" placeholder="Correo" required></input>
        <input autoComplete="false" name="password" onChange={handleChange} type="password" placeholder="Contraseña" required></input>
        <input className={style.button}type="submit"></input>
      </form>
      <span
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          e.preventDefault();
          setRegister(!register);
        }}
      >
        ¿Ya tiene cuenta? Ingrese
      </span>
    </div>
  );
};

export default Register;
