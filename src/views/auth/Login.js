import React from 'react'

function Login() {
    return (
        <div className="form-container">
            <h2>Log in</h2>
            <form className="form">
                <input type="text" placeholder="email or username"></input>
                <input type="text" placeholder="password"></input>
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login;