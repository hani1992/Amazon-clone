import React, { useState } from 'react'
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const singIn = e=> {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth=>{
            history.push('/');
        })
        .catch(error=>alert(error.message));
    }
    const register = e=> {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/');
            }
        })
        .catch(error=> alert(error.message))
    }
    return (
        <div className="login">
            <Link to='/'>
           <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
           className='login_logo'/> 
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text'  value={email} onChange={e=> setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=> setPassword(e.target.value)} />
                    <button className='login__singInButton' type='submit' onClick={singIn}>Sing In</button>
                </form>
                <p>

                </p>
                <button className='login__registerButton' onClick={register}>Creat Your Amazon Account</button>
            </div>
        </div>
    )
}
