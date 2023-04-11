import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { onValue, ref, get } from 'firebase/database';

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
    <div>
      <h1>Announcements</h1>
      <table>
        <thead>
          <tr>
            <th>CourseId</th>
            <th>Announcment</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>{question.courseID}</td>
              <td>{question.question}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Announcments;

