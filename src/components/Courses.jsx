import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../backend/firebase';
import './Courses.css';
import AddCourse from '../backend/components/courseDatabase/AddCourse';
import ViewCourses from '../backend/components/courseDatabase/ViewCourses';

const Courses = () => {
    const [toggleButton, setToggleButton] = useState(false)



    return (
      <>
            <div className='content'>
            <div className="course-title">
                <h1 className ='title-courses'>Courses</h1>
                <button id = 'coursebutton' onClick={() => setToggleButton(prev => !prev)}>
                    {toggleButton ? 'Hide' : 'Add Course'}
                </button>
            </div>
            {/* organizer button stuff */}
            <div>
                
                {
                    // if the button is toggled on, show the addCourse section (organizer only)
                    toggleButton ? <AddCourse/> : null
                }
            </div>
            
            <ViewCourses/>
{/* 
            <div className="courserow1">
            <div className="course-container">
                <div className='course-background'>
                <div className="course-text">Digital Skills</div>
                <div className="course-overlay">
                    <div className="course-overlay-text">Hello World</div>
                </div>
                </div>
            </div>

            <div className="course-container">
                <div className='course-background'>
                <div className="course-text">Software Engineering</div>
                <div className="course-overlay">
                    <div className="course-overlay-text">Hello World</div>
                </div>
                </div>
            </div>
            </div>

            <div className="courserow2">
            <div className="course-container">
                <div className='course-background'>
                <div className="course-text">Web Programming</div>
                <div className="course-overlay">
                    <div className="course-overlay-text">Hello World</div>
                </div>
                </div>
            </div>

            <div className="course-container">
                <div className='course-background'>
                <div className="course-text">Algorithms</div>
                <div className="course-overlay">
                    <div className="course-overlay-text">Hello World</div>
                </div>
                </div>
            </div>
            </div> */}

            {/* <div className="courserow1">
            <div className="course-container">
                <div className='course-background'>
                <div className="course-text">Hello World</div>
                <div className="course-overlay">
                    <div className="course-overlay-text">Hello World</div>
                </div>
                </div>
            </div>

            <div className="course-container">
                <div className='course-background'>
                <div className="course-text">Hello World</div>
                <div className="course-overlay">
                    <div className="course-overlay-text">Hello World</div>
                </div>
                </div>
            </div>
            </div>

            <div className="courserow1">
            <div className="course-container">
                <div className='course-background'>
                <div className="course-text">Hello World</div>
                <div className="course-overlay">
                    <div className="course-overlay-text">Hello World</div>
                </div>
                </div>
            </div>

            <div className="course-container">
                <div className='course-background'>
                <div className="course-text">Hello World</div>
                <div className="course-overlay">
                    <div className="course-overlay-text">Hello World</div>
                </div>
                </div>
            </div>
            </div> */}






            </div>
              

      </>
    )
  }
  
  export default Courses