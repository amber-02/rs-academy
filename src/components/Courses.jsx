import React, { useState } from 'react';
import AddCourse from '../backend/components/courseDatabase/AddCourse';
import ViewCourses from '../backend/components/courseDatabase/ViewCourses';
import './Courses.css';

const Courses = ({ signin }) => {
  const [toggleButton, setToggleButton] = useState(false);

  return (
    <div className='content'>
        <>
          <div className="course-title">
            <h1 className='title-courses'>Courses</h1>
            <button id='coursebutton' onClick={() => setToggleButton(prev => !prev)}>
              {toggleButton ? 'Hide' : 'Add Course'}
            </button>
          </div>
          <div>
            {
              // if the button is toggled on, show the addCourse section (organizer only)
              toggleButton ? <AddCourse /> : null
            }
          </div>
          <ViewCourses />
        </>
    </div>
  );
};

export default Courses;
