
import './ViewQuestions.css';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { onValue, ref } from 'firebase/database';
const Announcments = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const questionsRef = ref(db, 'announcements');
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

  return (
    <div className='questions-table-out'>
      <h1 className='q-forum-title'>Announcements</h1>
      <table>
        <thead className='head-panel'>
          <tr className='table-header-out'>
            <th className='table-header'>CourseId</th>
            <th className='table-header-1'>Announcement</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td className='resp-row'>{question.courseID}</td>
              <td className='resp-row'>{question.question}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Announcments;

