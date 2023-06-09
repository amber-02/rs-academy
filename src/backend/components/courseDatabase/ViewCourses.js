import React, { useState, useEffect } from 'react';
import { push, ref, onValue, get } from 'firebase/database';
import { db, auth } from '../../firebase';
import './ViewCourses.css';
import Button from '../auth/buttons/index';

const ViewCoursesInTable = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const handleEnrollCourse = (courseId) => {
    setSelectedCourseId(courseId);
  };

  
  const test = (courseId) => {
    const studentId = auth.currentUser.uid;
    const studentsReference = ref(db, 'Students');
    let userId;
    onValue(studentsReference, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const childData = childSnapshot.val();
        if (childData.studentId === studentId){
          userId = key;
        }
      });
    })
    try{
      if (userId) {
        const questionReferenec = ref(db, `Students/${userId}`);
        push(questionReferenec, { courseId });
        console.log('Enrollment successful');
      } else {
        console.error('Error: User ID not found');
      }
    }
    catch(error){
      console.error('Error retrieving data:', error);
    }
  };
  
  
  
  

  useEffect(() => {
    const coursesReference = ref(db, 'courses');
    onValue(coursesReference, (snapshot) => {
      const coursesList = [];
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const childData = childSnapshot.val();
        coursesList.push({ id: key, ...childData });
      });
      setCourses(coursesList);
    });
  }, []);

  return (
    <div className='view-courses-container'>
      <table className='coursestable' id='coursestable'>
        <thead className='tablehead' id='tablehead'>
          <tr>
            <th className='heading'>ID</th>
            <th className='heading'>TITLE</th>
            <th className='heading'>ORGANISER</th>
            <th className='heading'>LENGTH (WEEKS)</th>
            <th className='heading'>TEACHING METHOD</th>
            <th className='heading'>DESCRIPTION</th>
            <th className='heading'></th>
          </tr>
        </thead>
        <tbody className='table-content'>
          {courses.map((course) => (
            <tr className='tableheading' key={course.id}>
              <td>{course.courseID}</td>
              <td>{course.name}</td>
              <td>{course.organiser}</td>
              <td>{course.length}</td>
              <td>{course.teaching}</td>
              <td>{course.description}</td>
              {selectedCourseId === course.id ? (
                <td>{test(course.id)}</td>
              ) : (
                <td>
                  <Button className='forum-btn' text='Enroll' onClick={() => handleEnrollCourse(course.id)} />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCoursesInTable;



