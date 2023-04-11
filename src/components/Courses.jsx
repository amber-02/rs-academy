import React, { useState } from 'react';
import AddCourse from '../backend/components/courseDatabase/AddCourse';
import ViewCourses from '../backend/components/courseDatabase/ViewCourses';
import './Courses.css';

const Courses = () => {
  const [toggleButton, setToggleButton] = useState(false);

  return (
    <div className='content'>
        <>
        <h1 className='title-courses'>Courses</h1>
          <div className="course-title">
            <button className='coursebutton' id='coursebutton' onClick={() => setToggleButton(prev => !prev)}>
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
