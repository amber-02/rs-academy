import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { onValue, ref, get } from 'firebase/database';
import AddQuestion from './AddQuestion';
import Button from '../auth/buttons/index';

const ViewQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const questionsRef = ref(db, 'questions');
    onValue(questionsRef, (snapshot) => {
      const questionsArray = [];
      snapshot.forEach((childSnapshot) => {
        const question = childSnapshot.val().question;
        const key = childSnapshot.key;
        questionsArray.push({ key, question });
      });
      setQuestions(questionsArray);
    });
  }, []);

  const [{answerQuestion}, setAnswerQuestion] = useState(false);
  const showAnswerQuestion = () => {
    setAnswerQuestion(true);
  };

  return (
    <div className='view-questions-container'>
      <h1>Forum of Questions</h1>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.key}>
              <td>{question.question}</td>
              <td>
                {answerQuestion ? ( <AddQuestion /> ) : (
                <Button text="Reply" onClick={showAnswerQuestion} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewQuestions;
