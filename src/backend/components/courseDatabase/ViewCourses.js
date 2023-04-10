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
      <h1>View Courses</h1>
      <table id = 'coursestable'>
        <thead id = 'tablehead'>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>ORGAINSER</th>
            <th>LENGTH (WEEKS)</th>
            <th>TEACHING METHOD</th>
            <th>DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr className = 'tableheading' key={course.id}>
              <td>{course.courseID}</td>
              <td>{course.name}</td>
              <td>{course.organiser}</td>
              <td>{course.length}</td>
              <td>{course.teaching}</td>
              <td>{course.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCoursesInTable;


