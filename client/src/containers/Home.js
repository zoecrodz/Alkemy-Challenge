import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/user";
import New from "../components/New";
import Historial from "../components/Historial";
import style from "../styles/home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className={style.container}>
      {user?.id && (
        <>
          <New user={user}/>
          {/* <Historial user={user}/> */}
        </>
      )}
    </div>
  );
};

export default Home;
