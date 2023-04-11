import './Forum.css'
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
    <div>
      <h1>Forum of Questions</h1>
      <table>
        <thead>
          <tr>
            <th>CourseId</th>
            <th>Questions</th>
            <th>Actions</th>
            <th>Responses</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>{question.courseID}</td>
              <td>{question.question}</td>
              <td>
                {selectedQuestionId === question.id ? (
                  <AddQuestion questionId={selectedQuestionId} />
                ) : (
                  <Button text="Reply" onClick={() => handleAnswerQuestion(question.id)} />
                )}
              </td>
              <td>
                {selectedQuestionId === question.id ? (
                  <QuestionResponses questionId={selectedQuestionId} />
                ) : (
                  <Button2 text="Responses" onClick={() => handleAnswerQuestion(question.id)} />
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

