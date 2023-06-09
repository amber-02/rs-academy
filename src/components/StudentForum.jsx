import './StudentForum.css';
import '../backend/components/Forum/Forum.css'
import React, { useState } from 'react';
import AddQuestion from '../backend/components/Forum/AddQuestion';
import ViewQuestions from '../backend/components/Forum/ViewQuestions';
import MakeAnnouncement from '../backend/components/Forum/MakeAnnouncement';
import AnnounForum from '../backend/components/Forum/AnnounForum';
import {passAccountType} from './navbar/SignIn';

const StudentForum = () => {
  const [question, setQuestion] = useState('');
  const [courseID, setcourseID] = useState('');

  console.log(passAccountType);
  const handleSubmit = (event) => {
    event.preventDefault();
    AddQuestion(question, courseID);
    setQuestion('');
    setcourseID('');
  };

  const OrganiserContent = () => {
    if (passAccountType.accountType==='organiser'){
      return true;
    }
    if (passAccountType.accountType==='student'){
      return false;
    }
  }

  return (
    <div className='content'>
        <>
          <div className='divstuff'>
            <img className='rs-logo' src='graphic6.gif' alt='graphic 6'></img>
          </div>
          
          <form className = 'addCourse' onSubmit={handleSubmit}>
            <h1 className='th'>Student Forum</h1>
            <input className='inputfield'
              type='text'
              placeholder='Course ID'
              value={courseID}
              onChange={(event) => setcourseID(event.target.value)}
            />
            <br></br>
            <input className='inputfield'
              type='text'
              placeholder='Ask a Question'
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
            <br></br>
            <div>
              <button className = 'submitcoursebutton' type='submit' id='post'>
                Post
              </button>
            </div>
          </form>
          <ViewQuestions />
          <AnnounForum />
          { OrganiserContent() ? (
            <>
            <MakeAnnouncement/>
            </>
          ) : null }
        </>
    </div>
  );
};

export default StudentForum;
