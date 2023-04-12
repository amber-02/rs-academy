import './AnswerQuestion.css';
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
    <div className='answer-form'>
      <h2 className='answer-title'>Answer Question</h2>
      <form className='answer-and-btn' onSubmit={handleSubmit}>
          <input placeholder='...' type='text' className = 'answer' id='question' required value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <button className='answer-btn' type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AnswerQuestionOnForum;

