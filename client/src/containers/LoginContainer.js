import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"
import {registerUser, login} from "../store/user"
import Login from "../components/Login"
import Register from "../components/Register"
import style from '../styles/login.module.css'

const LoginContainer = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const [register, setRegister] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        setUser({})
    }, [register])


    const handleChange = (E) => {
        E.preventDefault()
        setUser({...user, [E.target.name]: E.target.value})
        console.log(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.name){
            dispatch(registerUser(user))
            .then(() => setRegister(false))
        }
        else{
            dispatch(login(user))
            .then(() => history.go(0))
        }
        console.log(user)
    }

    return (
        <div className={style.main}>
            <div className={style.firstHalf}>
            <h1>Bienvenido/a,</h1>
            <h2>ingrese a su cuenta antes de comenzar.</h2>
            </div>
            <div className={style.secondHalf}>
                {!register ? (
                    <Login register={register} setRegister={setRegister} handleChange={handleChange} handleSubmit={handleSubmit}/>
                ) : (
                    <Register register={register} setRegister={setRegister} handleChange={handleChange} handleSubmit={handleSubmit}/>
                )
            }
            </div>
        </div>
    );
};

export default LoginContainer;