import React, {useState} from 'react';
import { db } from '../../firebase';
import { set, ref, push, update } from 'firebase/database';
import '/Users/amberkhandwalla/rs-academy/src/components/Courses.css';

const AddCourse=()=>{
    const [name, setName] = useState('');
    const [organiser, setOrganiser] = useState('');
    const [length, setLength] = useState('');
    const [description, setDesc] = useState('');
    const [teaching, setTeaching] = useState('');
    
    const addCourse = (e) => {
        e.preventDefault();
        const courseRef = ref(db, 'courses');
        const course = {
          name,
          organiser,
          length,
          teaching,
          description
        };
        push(courseRef, course);
      };
  return (
    <div className='add-course-container'>
      <form onSubmit={addCourse}>
        <h1>Add Course</h1>
        <input style={{marginBottom:'1rem'}} type='text' placeholder='Course name' value={name} onChange={(e) => setName(e.target.value)}></input>
        <input type='text' placeholder='Course organizer' value={organiser} onChange={(e) => setOrganiser(e.target.value)}></input>
        <div>
          <p>Method of teaching:</p>
          <input type='radio' name='teaching-method' value='online' checked={teaching === 'online'} onChange={() => setTeaching('online')}></input>Online
          <input type='radio' name='teaching-method' value='in-person' checked={teaching === 'in-person'} onChange={() => setTeaching('in-person')}></input>In-Person
          <input type='radio' name='teaching-method' value='hybrid' checked={teaching === 'hybrid'} onChange={() => setTeaching('hybrid')}></input>Hybrid
        </div>
        <input style={{marginTop:'1rem'}} type='text' placeholder='Length in weeks' value={length} onChange={(e) => setLength(e.target.value)}></input>
        <textarea placeholder='Course description' value={description} onChange={(e) => setDesc(e.target.value)}></textarea>
        <button id = 'submitcoursebutton' type='submit'>Submit New Course</button>
      </form>
    </div>
  );
};

export default AddCourse;









/*
import React, { useState } from 'react';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import Button from './components/auth/buttons/index';
import Button2 from './components/auth/buttons/index2';

import AddCourse from './components/courseDatabase/AddCourse';
import ViewCourses from './components/courseDatabase/ViewCourses';


import AddQuestion from './components/Forum/AddQuestion';


function App() {

  const [displaySignIn, setDisplaySignIn] = useState(true);
  const [displaySignUp, setDisplaySignUp] = useState(false);


  const showSignUp = () => {
    setDisplaySignUp(true);
    setDisplaySignIn(false);
  };
  const showSignIn = () => {
    setDisplaySignUp(false);
    setDisplaySignIn(true);
  };
  return (

    <div className="App">
      
      <div>
        {displaySignIn ? ( <SignIn /> ) : (
        <Button text="Go back to sign in" onClick={showSignIn} />
        )}
        {displaySignUp ? ( <SignUp /> ) : (
        <Button2 text="Or Sign Up here" onClick={showSignUp} />
        )}
      </div>
      <AuthDetails />
      <AddCourse/>
      <AddQuestion/>
      <ViewCourses/>
      
    </div>
  );
}
export default App;

*/

