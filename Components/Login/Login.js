import React, { useState, useContext} from 'react'
import { authContext } from '../../Context';
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
    const {userData} = useContext(authContext)
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
                <button type='submit' style={{backgroundColor:'green', borderRadius:'15%'}}>
                    Submit
                </button>
            </form>
            <nav style={{fontSize: '30px'}}>
                <Link to='/register'>Register</Link>
            </nav>
            <div>Nombre ingresado: {userData.firstName}</div>
        </>
    )
}

export default Login;
