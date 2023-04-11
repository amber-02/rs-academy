import './StudentForum.css';
import React, { useState } from 'react';
import AddQuestion from '../backend/components/Forum/AddQuestion';
import ViewQuestions from '../backend/components/Forum/ViewQuestions';

const StudentForum = ({ signIn }) => {
  const [question, setQuestion] = useState('');
  const [courseID, setcourseID] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    AddQuestion(question, courseID);
    setQuestion('');
    setcourseID('');
  };

  return (
    <div className='content'>
      {signIn ? (
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
        </>
      ) : (
        <h1>Please sign in to view</h1>
      )}
    </div>
  );
};

export default StudentForum;


