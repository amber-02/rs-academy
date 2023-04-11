import './StudentForum.css';
import React, { useState } from 'react';
import AddQuestion from '../backend/components/Forum/AddQuestion';
import ViewQuestions from '../backend/components/Forum/ViewQuestions';
import MakeAnnouncement from '../backend/components/Forum/MakeAnnouncement';
import AnnounForum from '../backend/components/Forum/AnnounForum';
import {passAccountType} from './navbar/SignIn';

const StudentForum = ({ signIn }) => {
  const [question, setQuestion] = useState('');
  const [courseID, setcourseID] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    AddQuestion(question, courseID);
    setQuestion('');
    setcourseID('');
  };

  const showAn = (e) =>{
    e.preventDefault();
    let variable = false;
    if (passAccountType=='organiser'){
      variable = true;
    }
  }

  return (
    <div className='content'>
        <>
          <div className='divstuff'>
            <img className='rs-logo' src='graphic6.gif' alt='graphic 6'></img>
          </div>
          <h1 className='title'>Student Forum</h1>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Course ID'
              value={courseID}
              onChange={(event) => setcourseID(event.target.value)}
            />
            <input
              type='text'
              placeholder='Ask a Question'
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
            <div className='buttons'>
              <button type='submit' id='post'>
                Post
              </button>
            </div>
          </form>
          <ViewQuestions />
          <AnnounForum />
          {showAn ? (
            <MakeAnnouncement />
          ) : null}
        </>
    </div>
  );
};

export default StudentForum;



