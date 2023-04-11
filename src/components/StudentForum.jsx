import './StudentForum.css';
import React, { useState } from 'react';
import AddQuestion from '../backend/components/Forum/AddQuestion'
import ViewQuestions from '../backend/components/Forum/ViewQuestions'


const StudentForum = () => {
  const [question, setQuestion] = useState('');
  const [courseID, setcourseID] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    AddQuestion(question,courseID);
    setQuestion('');
    setcourseID('');
  };

  return (
    <div className = 'content'>
        <div className = 'divstuff'> 
            <img className='rs-logo' src='graphic6.gif' alt="graphic 6"></img>
        </div>
      <h1 className = 'title'>Student Forum</h1>
      <h2 className = 'title2'>Post a Question</h2>
      <form className = 'questionform' onSubmit={handleSubmit}>
        <input required id = 'box' type='text' placeholder='Course ID' value={courseID} onChange={(event) => setcourseID(event.target.value)} />
        <input required id = 'questionbox' type='text' placeholder='Ask a Question' value={question} onChange={(event) => setQuestion(event.target.value)} />
        {/* <div class = 'buttons'> */}
            <button type="submit" id = 'post'>Post</button>
        {/* </div> */}
      </form>
      <ViewQuestions/>
    </div>
  );
};

export default StudentForum;
