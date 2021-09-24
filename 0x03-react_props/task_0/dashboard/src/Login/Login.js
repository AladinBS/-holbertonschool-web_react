import React from "react";
import './Login.css';

function Login() {
    return (
        <div className="App-body">
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email"/>

            <label htmlFor="password">Password:</label>
            <input id="password" name="password"/>
            <button>OK</button>
        </div>
    );
}

export default Login;