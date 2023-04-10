import './SignIn.css';
import './SignIn.css';
import { createUserWithEmailAndPassword, sendEmailVerification  } from 'firebase/auth';
import React, {useState} from 'react';
import { auth } from '../../backend/firebase';

const TeacherSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const signUp = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          console.log('successful register')
          window.alert('successfull register')
  
          console.log(userCredential);
          // Send email verification
          await sendEmailVerification(userCredential.user);
        } catch (error) {
          console.log('unsuccessful register')
          window.alert('error registering')
  
          console.log(error);
        }
      }

    return (
      <>
        <div className="content2 student">
            <h1>Signup</h1>
            <form onSubmit={signUp}>
            <div className='inputs'>
                <div class="mat-in">
                    <input type="text" name="username" placeholder="" required></input>
                    <span class="bar"></span>
                    <label>Username</label>
                </div>
                <div class="mat-in">
                <input type='email' name='email' required  value={email} onChange={(e) => setEmail(e.target.value)}  ></input>
                    <label>Email</label>
                    <span class="bar"></span>
                </div>
                <div class="mat-in">
                    <input type='password' name='password' required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <label>Password</label>
                    <span class="bar"></span>
                </div>
            </div>

            <div className='rightInput'>
                <div class="mat-in">
                    <input type="text" name="country" placeholder="" required></input>
                    <span class="bar"></span>
                    <label>Country</label>
                </div>
                <div class="mat-in">
                    <input type="text" name="course selection" placeholder="" required></input>
                    <span class="bar"></span>
                    <label>Courses</label>
                </div>
                <div class="buttons"> 
                    <button type="submit" name="submit" id="login">Sign Up</button>
                </div>
            </div>
            </form>
            <div class="signup">
                <p class="signup-txt">Have an account?</p>
                <p class="signup-txt"><a href="/signin" class="signup-btn">Sign in</a> here</p>
            </div>
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
  
  export default TeacherSignUp