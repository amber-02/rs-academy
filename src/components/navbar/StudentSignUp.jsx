import './SignIn.css';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import { auth, db } from '../../backend/firebase';
import {ref, push } from 'firebase/database';

const StudentSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setName] = useState('');

    const AddStudentToDatabase = async (user) => {
        const studentrReference = ref(db, 'Students');
        const studentId = auth.currentUser.uid;
        const studentData = { email: user.email, username,studentId};
        await push(studentrReference, studentData);
    };

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            window.prompt('successful register')
            console.log(userCredential);
            await sendEmailVerification(userCredential.user);
            await signInWithEmailAndPassword(auth, email, password);
            await AddStudentToDatabase(userCredential.user);
        } catch (error) {
            window.prompt('error registering')
            console.log(error);
        }
    }

    return (
        <>
            <div className="content2 student">
                <h1>Sign Up</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    signUp(e);
                }}>
            <div className='inputs'>
                <div class="mat-in">
                    <select name='title'>
                        <option value="" disabled selected>Title</option>
                        <option>Miss</option>
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Other</option>
                    </select>
                    <span class="bar"></span>
                </div>
                <div class="mat-in">
                    <input type='' name='' value={username} onChange={(e) => setName(e.target.value)} required></input>
                    <label>First Name</label>
                    <span class="bar"></span>
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
 
            <div class="rightInput"> 
                <div class="mat-in">
                    <input type='date' name='dob' required value={new Date().toISOString().substr(0, 10)}></input>
                    <label>Date of Birth</label>
                    <span class="bar"></span>
                </div>
                <div class="mat-in">
                    <input type='tel' name='' required></input>
                    <label>Phone</label>
                    <span class="bar"></span>
                </div>
                <button type="submit" name="submit" id="login">Sign Up</button>
                <div class="signup">
                    <p class="signup-txt">Have an account?</p>
                    <p class="signup-txt"><a href="/signin" class="signup-btn">Sign in</a> here</p>
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
  
  export default StudentSignUp
