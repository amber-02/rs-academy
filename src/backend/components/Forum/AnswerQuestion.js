import './Forum.css';
import React, { useState } from 'react';
import { db } from '../../firebase';
import { push, ref } from 'firebase/database';

const AnswerQuestionOnForum = ({ questionId }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const questionReferenec = ref(db, `questions/${questionId}`);
      await push(questionReferenec, { answer });
      setAnswer('');
    } catch (error) {
      console.error('Error adding answer:', error);
    }
  };
  return (
    <div>
      <div className = 'divstuff'>
        <h2>Answer Question</h2>
      </div>
      <form onSubmit={handleSubmit}>

      <div className = 'divstuff'>
        <label>Answer:</label>
      </div>
        <input type='text' className = 'answer' id='question' required value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AnswerQuestionOnForum;

