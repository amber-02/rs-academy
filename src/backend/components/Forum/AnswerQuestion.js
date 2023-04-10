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
      <h2>Answer Question</h2>
      <form onSubmit={handleSubmit}>
        <label>Answer:</label>
        <input type='text' id='question' value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AnswerQuestionOnForum;

