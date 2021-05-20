import React from 'react';
import {Route} from 'react-router-dom'
import LoginContainer from "./containers/LoginContainer"

const App = () => {
    return (
        <div>
            <Route path="/login" render={() => <LoginContainer />}/>
        </div>
    );
};

export default App;