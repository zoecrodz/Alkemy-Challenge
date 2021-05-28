import React, { useEffect, useState } from "react";
import style from "../styles/historial.module.css";
import {useHistory} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getTransactions, deleteTransaction } from "../store/transaction";

const Historial = ({ user }) => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transaction.all);
  const history = useHistory();
  const [total, setTotal] = useState(0)

  useEffect(() => {
    dispatch(getTransactions(user.id));
  }, []);

  const handleDelete = (i) => {
    dispatch(deleteTransaction(i))
    .then(() => history.go(0))
  }

  return (
    <>
    {/* <h1 className={style.total}>Total: ${total}</h1> */}
      <h1 className={style.h1}>Historial</h1>
      <div className={style.container}>
        {transactions[0] && (
          <>
            {transactions?.map((child) => (
              <div className={style.child}>
                <span>N° {child.id}</span>
                <span>Fecha: {child.createdAt}</span>
                <span>
                  Operación: {child.type == "entry" ? "Ingreso" : "Extracción"}
                </span>
                <span>Monto: ${child.amount}</span>
                <span>Concepto: {child.detail}</span>
                <button onClick={(e) => {
                    e.preventDefault()
                    handleDelete(child.id)}}>Eliminar</button>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Historial;
