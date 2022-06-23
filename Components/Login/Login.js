import React, { useState, useRef } from 'react'
import './Login.css'

const Login = () => {
    const [credentials, setCredentials] = useState({
        user:'',
        pass:''
    });

    const verifyAccess = (e) => {
        e.preventDefault();
        setCredentials({user:e.target[0].value, pass: e.target[1].value})
        console.log('e', e.target[0].value)
        console.log('e', e.target[1].value)
    }

    const validate = () => {   
        return true
    }

    return (
        <>
            <div className='login' >Login</div>
            <form onSubmit={(e)=> {verifyAccess(e)}}>
                <p>User:</p>
                <input name='user'/>
                <p>Password:</p>
                <input name='pass' type='password'/>
                <br/>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </>
    )
}

export default Login;
