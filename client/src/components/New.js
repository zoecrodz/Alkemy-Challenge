import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom"
import { newTransaction } from "../store/transaction";
import style from "../styles/new.module.css";

const New = ({ user }) => {

  const history = useHistory()
  const [entry, setEntry] = useState(false);
  const [outgoing, setOutgoing] = useState(false);
  const [transaction, setTransaction] = useState({});
  const [message, setMessage] = useState(false);
  const [message2, setMessage2] = useState(false)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data;
    if (entry) {
      transaction.type = "entry";
      data = {
        info: transaction,
        userId: user.id,
      };
      dispatch(newTransaction(data))
      .then(() => history.go(0))
    } else if (outgoing) {
      transaction.type = "outgoing";
      data = {
        info: transaction,
        userId: user.id,
      };
      dispatch(newTransaction(data))
      .then(() => history.go(0))
    } else {
      setMessage(true);
      setMessage2(true)
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(false);
    setMessage2(false)
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.container}>
      {user?.id && (
        <>
          <h1>Nueva transacción</h1>
          <div className={style.buttons}>
            <button
              onClick={(e) => {
                e.preventDefault();
                setEntry(true);
                setOutgoing(false);
              }}
            >
              Ingresar
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setEntry(false);
                setOutgoing(true);
              }}
            >
              Extraer
            </button>
          </div>
          {message && <span className={style.message}>Seleccione el tipo de transacción</span>}
          <form onSubmit={handleSubmit}>
            <label for="amount">Monto</label>
            <input onChange={handleChange} name="amount" type="number"></input>
            <label for="detail">Detalle</label>
            <textarea
              onChange={handleChange}
              name="detail"
              type="text"
            ></textarea>
            <input style={{width: '80px', fontSize:'1em'}}className={style.submit} type="submit"></input>
          </form>
        </>
      )}
      {message2 && (
        <span className={style.message2}>Seleccione el tipo de transacción</span>
      )}
    </div>
  );
};

export default New;
