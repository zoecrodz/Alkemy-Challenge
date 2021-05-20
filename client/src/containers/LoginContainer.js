import React, {useState, useEffect} from 'react';
import Login from "../components/Login"
import Register from "../components/Register"
import style from '../styles/login.module.css'

const LoginContainer = () => {

    const [register, setRegister] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        setUser({})
    }, [register])


    const handleChange = (E) => {
        E.preventDefault()
        setUser({...user, [E.target.name]: E.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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