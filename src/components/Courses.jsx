import React, { useState } from 'react';
import AddCourse from '../backend/components/courseDatabase/AddCourse';
import ViewCourses from '../backend/components/courseDatabase/ViewCourses';
import './Courses.css';
import {passAccountType} from './navbar/SignIn';

const Courses = () => {
  const OrganiserContent = () => {
    if (passAccountType.accountType==='organiser'){
      return true;
    }
    if (passAccountType.accountType==='student'){
      return false;
    }
  }

  return (
    <div className='content'>
        <>
        <h1 className='title-courses'>Courses</h1>
          { OrganiserContent() ? (
            <>
            <AddCourse />
            </>
          ) : null }
          <ViewCourses />
        </>
    </div>
  );
};

export default Courses;

