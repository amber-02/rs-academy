import React, {useState} from 'react';
import { db } from '../../firebase';
import { set, ref, push, update } from 'firebase/database';

const AddQuestion=()=>{
    const [question, setQuestion] = useState('');
    const [courseID, setcourseID] = useState('');
    
    const addQuestion = (e) => {
        e.preventDefault();
        const questionRef = ref(db, 'questions');
        const questionX = {
            question,
            courseID
        };
        push(questionRef, questionX);
      };
  return (
    <div className='add-course-container'>
      <form onSubmit={addQuestion}>
        <h1>Forum</h1>
        <textarea placeholder='Ask a Question' value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
        <input type='text' placeholder='Course ID' value={courseID} onChange={(e) => setcourseID(e.target.value)}></input>
        <button type='submit'>Submit Question</button>
      </form>
    </div>
  );
};

export default AddQuestion;
