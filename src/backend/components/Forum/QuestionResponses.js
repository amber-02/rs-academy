import './Forum.css'
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { onValue, ref } from 'firebase/database';

const QuestionResponses = ({ questionId }) => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const responsesRef = ref(db, `questions/${questionId}`);
    onValue(responsesRef, (snapshot) => {
      const responsesArray = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        const key = childSnapshot.key;
        responsesArray.push({ id: key, ...childData });
      });
      setResponses(responsesArray);
    });
  }, [questionId]);

  return (
    <div className='question-responses-container'>
      <div className='divstuff'>
        <h2>Responses</h2>
      </div>
      <ul>
        {responses.map((response) => (
          <li key={response.id}>{response.answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionResponses;
