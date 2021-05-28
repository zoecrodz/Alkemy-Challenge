import React, {useEffect} from 'react';
import style from "../styles/historial.module.css"
import {useDispatch, useSelector} from "react-redux"
import {getTransactions} from "../store/transaction"

const Historial = ({user}) => {

    const dispatch = useDispatch()
    const transactions = useSelector(state => state.transaction.all)

console.log("func", transactions)

    useEffect(() => {
        dispatch(getTransactions(user.id))
    }, [])

    return (
        <div className={style.container}>
     {transactions[0] && (
         <>
         {transactions?.map(child => (
             <div className={style.child}>
                 <span>N° {child.id}</span>
                 <span>Fecha: {child.createdAt}</span>
                 <span></span>
                 <span>Monto: ${child.amount}</span>
                 <span>Concepto: {child.detail}</span>
                 <span></span>
             </div>
         ))}
         </>
     )}       
        </div>
    );
};

export default Historial;