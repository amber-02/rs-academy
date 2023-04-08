import './SignIn.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import { auth } from '../../backend/firebase';



const SignIn = ({setUserData, userData}) => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const signInUser = (e) => {
            e.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => { 
                console.log('succesfull login')
                console.log(userCredentials);
                window.alert('successfull login')
            }).catch((error) => {
                console.log('unsuccesfull login')
                window.alert('error logging in')

                console.log(error);
            })
        }

    return (
      <>
        <div className="content2">
            <form onSubmit={signInUser}>
            <div class="mat-in">
                <input type='email' name='email' placeholder='Enter your email' value={email} required onChange={(e) => setEmail(e.target.value)} ></input>
                {/* <input type="text" name="username" placeholder="" required></input> */}
                <span class="bar"></span>
            </div>
            <div class="mat-in">
                <input type='password' name='password' required placeholder='Enter your passsword' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                {/* <input type="password" name="password" placeholder="" required></input> */}
                <span class="bar"></span>
            </div>
            <div class="buttons"> 
                <button type="submit" name="submit" id="login">Login</button>
                <div class="signup">
                    <p class="signup-txt">Don't have an account?<br/>Sign up as a:</p>
                    <p class="signup-txt">
                        <a href="/student_signup" class="signup-btn">Student</a>
                        <a href="/teacher_signup" class="signup-btn">Teacher</a>
                    </p>
                </div>
            </div>
            </form>
        </div>
        <div class="bg-boxes">
                    <svg width="300px" height="100%" id="col1">
            <rect width="150px" height="150px" x="75px" y="75px" class="bubble" id="bub1" />
            </svg>
            <svg width="200px" height="100%" id="col2">
            <rect width="100px" height="100px" x="50px" y="50px" class="bubble" id="bub2" />
            </svg>
            <svg width="260px" height="100%" id="col3">
                <rect width="130px" height="130px" x="65px" y="65px" class="bubble" id="bub3" />
            </svg>
            <svg width="160px" height="100%" id="col4">
                <rect width="80px" height="80px" x="40px" y="40px" class="bubble" id="bub4" />
            </svg>
            <svg width="240px" height="100%" id="col5">
                <rect width="120px" height="120px" x="60px" y="60px" class="bubble" id="bub5" />
            </svg>
            
            <svg width="200px" height="100%" id="col6">
                <polygon points="50,150 100,50 150,150" class="bubble" id="bub6" />
            </svg>
            <svg width="200px" height="100%" id="col7">
                <rect width="100px" height="100px" x="50px" y="50px" class="bubble" id="bub7" />
            </svg>
            <svg width="200px" height="100%" id="col8">
                <rect width="100px" height="100px" x="50px" y="50px" class="bubble" id="bub8" />
            </svg>
            <svg width="200px" height="100%" id="col9">
                <rect width="100px" height="100px" x="50px" y="50px" class="bubble" id="bub9" />
            </svg>
            <svg width="200px" height="100%" id="col10">
                <rect width="100px" height="100px" x="50px" y="50px" class="bubble" id="bub10" />
            </svg>
            <svg width="100px" height="100%" id="col11">
                <rect width="50px" height="50px" x="25px" y="25px" class="bubble" id="bub11" />
            </svg>
        </div>
      </>
    )
  }
  
  export default SignIn