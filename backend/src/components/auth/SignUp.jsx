import { createUserWithEmailAndPassword, sendEmailVerification  } from 'firebase/auth';
import React, {useState} from 'react';
import { auth } from '../../firebase';

const SignUp=()=>{
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const signUp = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          console.log(userCredential);
          // Send email verification
          await sendEmailVerification(userCredential.user);
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <div className='sign-in-container'>
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}  ></input>
                <input type='password' placeholder='Enter your passsword' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type = "submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp