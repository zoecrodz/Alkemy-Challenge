import React from "react";
import style from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.container}>
      <img src={process.env.PUBLIC_URL + "/logo.jpg"} />
    </div>
  );
};

export default Navbar;
