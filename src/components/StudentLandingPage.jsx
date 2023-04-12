import './LandingPage.css';
import React, { useState, useEffect } from 'react';
import { db, auth } from '../backend/firebase';
import { onValue, ref, get } from 'firebase/database';


const StudentLandingPage = () => {

  const studentId = auth.currentUser.uid;
  const studentsReference = ref(db, 'Students');
  let name;
  let ID;
  let key;
  let studentEmail;
  onValue(studentsReference, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      key = childSnapshot.key;
      const childData = childSnapshot.val();
      if (childData.studentId === studentId){
        name = childData.username;
        ID = childData.studentId;
        studentEmail = childData.email;
      }
    });
  });

  const [responses, setResponses] = useState([]);
  useEffect(() => {
    const responsesRef = ref(db, `Students/${key}`);
    onValue(responsesRef, (snapshot) => {
      const responsesArray = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        const key = childSnapshot.key;
        responsesArray.push({ id: key, ...childData });
      });
      setResponses(responsesArray);
    });
  }, [key]);


  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    const fetchCoursesData = async () => {
      const coursesData = [];

      for (let i = 0; i < responses.length; i++) {
        const courseId = responses[i].courseId;
        const coursesRef = ref(db, `courses/${courseId}`);
        try {
          const snapshot = await get(coursesRef);
          if (snapshot.exists()) {
            const courseData = snapshot.val();
            coursesData.push({ id: courseId, ...courseData });
          } else {
            console.log(`No data found for courseId: ${courseId}`);
          }
        } catch (error) {
          console.error(`Error retrieving data for courseId: ${courseId}`, error);
        }
      }

      setCourseData(coursesData);
    };

    fetchCoursesData();
  }, [responses]);

  

  return (
    <>
      <div className='content-contact'>
        <div className='info-containers'>
        <div className='my-modules box'>
            <h1>My Modules</h1>
            <table>
              <thead className='tablehead' id='tablehead'>
                <tr>
                  <th className='heading'>ID</th>
                  <th className='heading'>TITLE</th>
                  <th className='heading'>ORGANISER</th>
                </tr>
              </thead>
              <tbody>
                {courseData.map(course => (
                  <tr className='tableheading' key={course.id}>
                    <td>{course.courseID}</td>
                    <td>{course.name}</td>
                    <td>{course.organiser}</td>
                    <button type="button">View Course</button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='about-me box'>
            <h1>About Me</h1>
            <table>
              <tr>
                <th>Name</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>Student Id</th>
                <td>{ID}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{studentEmail}</td>
              </tr>
            </table>
          </div>
          <img className='LPgraphic2' src='graphic8.gif' alt="graphic 8"></img>
        </div>
        <img className='LPgraphic' src='graphic8.gif' alt="graphic 8"></img>
      </div>
    </>
  )
}

export default StudentLandingPage;
