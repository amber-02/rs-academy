import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';
import './ViewCourses.css';

const ViewCoursesInTable = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const coursesReferenc = ref(db, 'courses');
    onValue(coursesReferenc, (snapshot) => {
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
      <table className = 'coursestable' id = 'coursestable'>
        <thead className = 'tablehead' id = 'tablehead'>
          <tr>
            <th className = 'heading'>ID</th>
            <th className = 'heading'>TITLE</th>
            <th className = 'heading'>ORGANISER</th>
            <th className = 'heading'>LENGTH (WEEKS)</th>
            <th className = 'heading'>TEACHING METHOD</th>
            <th className = 'heading'>DESCRIPTION</th>
            <th className = 'heading'></th>
          </tr>
        </thead>
        <tbody className='table-content'>
          {courses.map((course) => (
            <tr className = 'tableheading' key={course.id}>
              <td>{course.courseID}</td>
              <td>{course.name}</td>
              <td>{course.organiser}</td>
              <td>{course.length}</td>
              <td>{course.teaching}</td>
              <td>{course.description}</td>
              <td><button>enroll</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCoursesInTable;


