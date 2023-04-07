import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';
import './ViewCourses.css';

const ViewCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const coursesRef = ref(db, 'courses');
    onValue(coursesRef, (snapshot) => {
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
            <th >Course Title</th>
            <th>Organizer</th>
            <th>Length (weeks)</th>
            <th>Teaching Method</th>
            <th>Course Description</th>
          </tr>
        </thead>
        <tbody>
        {/* loops over each row in the db with attributes */}
        {/* name, organiser, length, teaching ,description */}
          {courses.map((course) => (
            <tr className = 'tableheading' key={course.id}>
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

export default ViewCourses;


