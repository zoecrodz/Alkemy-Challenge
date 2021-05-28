import React, {useEffect} from 'react';
import {Route} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import LoginContainer from "./containers/LoginContainer"
import Home from "./containers/Home"
import {getUser} from "./store/user"

const App = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    
    useEffect(() => {
        if(localStorage.getItem("token")){
            dispatch(getUser())
        }
    }, [])

    return (
        <div>
            {user?.id ? (
                <Route path="/" render={() => <Home />}/>
            ) : (
                <>
            <Route exact path="" render={() => <LoginContainer />} />
            <Route path="/login" render={() => <LoginContainer />}/>
            </>
            )}
        </div>
    );
};

export default App;