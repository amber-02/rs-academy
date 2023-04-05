import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';

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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Organizer</th>
            <th>Length (weeks)</th>
            <th>Teaching Method</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {/* loops over each row in the db with attributes */}
        {/* name, organiser, length, teaching ,description */}
          {courses.map((course) => (
            <tr key={course.id}>
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


