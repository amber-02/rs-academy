// AddQuestion.js

import React, { useState } from 'react';
import { db } from '../../firebase';
import { push, ref, set } from 'firebase/database';

const AddQuestion = ({ questionId }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the path to use the questionId as a string
      const questionRef = ref(db, `questions/${questionId}`);
      await push(questionRef, { answer });
      setAnswer('');
    } catch (error) {
      console.error('Error adding answer:', error);
    }
  };

  return (
    <div className='add-question-container'>
      <h2>Answer Question</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='answer'>Answer:</label>
        <input
          type='text'
          id='question'
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddQuestion;

