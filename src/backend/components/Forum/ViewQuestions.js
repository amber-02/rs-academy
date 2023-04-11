import './ViewQuestions.css';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { onValue, ref, get } from 'firebase/database';
import AddQuestion from './AnswerQuestion';
import QuestionResponses from './QuestionResponses';
import Button from '../auth/buttons/index';
import Button2 from '../auth/buttons/index2';

const ViewQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  useEffect(() => {
    const questionsRef = ref(db, 'questions');
    onValue(questionsRef, (snapshot) => {
      const questionsArray = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        const key = childSnapshot.key;
        questionsArray.push({ id: key, ...childData });
      });
      setQuestions(questionsArray);
    });
  }, []);

  const handleAnswerQuestion = (questionId) => {
    setSelectedQuestionId(questionId);
  };

  return (
    <div className='questions-table-out'>
      <h1 className='q-forum-title'>Forum of Questions</h1>
      <table className='questions-table'>
        <thead className='head-panel'>
          <tr className='table-header-out'>
            <th className='table-header'>Course ID</th>
            <th className='table-header'>Questions</th>
            <th className='table-header'>Actions</th>
            <th className='table-header'>Responses</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td className='resp-row'>{question.courseID}</td>
              <td className='resp-row'>{question.question}</td>
              <td className='resp-btn-row'>
                {selectedQuestionId === question.id ? (
                  <AddQuestion questionId={selectedQuestionId} />
                ) : (
                  <Button className='forum-btn' text="Reply" onClick={() => handleAnswerQuestion(question.id)} />
                )}
              </td>
              <td className='resp-btn-row'>
                {selectedQuestionId === question.id ? (
                  <QuestionResponses questionId={selectedQuestionId} />
                ) : (
                  <Button2 className='forum-btn' text="Responses" onClick={() => handleAnswerQuestion(question.id)} />
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

