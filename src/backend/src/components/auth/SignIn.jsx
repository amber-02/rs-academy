import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import { auth } from '../../firebase';

const SignIn=()=>{
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredentials) => { 
            console.log(userCredentials);
          }).catch((error) => {
           console.log(error);
        })
      }
    return (
        <div className='sign-in-container'>
            <form onSubmit={signIn}>
                <h1>Log in</h1>
                <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}  ></input>
                <input type='password' placeholder='Enter your passsword' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type = "submit">Log In</button>
            </form>
        </div>
    );
};

export default SignIn