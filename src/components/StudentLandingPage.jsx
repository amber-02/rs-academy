import './LandingPage.css';
import React, { useState, useEffect } from 'react';
import { db, auth } from '../backend/firebase';
import { onValue, ref, get } from 'firebase/database';


const StudentLandingPage = () => {

  const studentId = auth.currentUser.uid;
  const studentsReference = ref(db, 'Students');
  let name;
  let ID;
  let studentEmail;
  onValue(studentsReference, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const key = childSnapshot.key;
      const childData = childSnapshot.val();
      if (childData.studentId === studentId){
        name = childData.username;
        ID = childData.studentId;
        studentEmail = childData.email;
      }
    });
  })


  return (
    <>
      <div className='content-contact'>
        <div className='info-containers'>
          <div className='my-modules box'>
            <h1>My Modules</h1>
            <table>
              <tr>
                <th>Course ID</th>
                <th>Module Name</th>
              </tr>
              <tr>
                <td>12345</td>
                <td>BioMed</td>
              </tr>
              <tr>
                <td>3124</td>
                <td>OS</td>
              </tr>
              <tr>
                <td>3124</td>
                <td>IPA</td>
              </tr>
              <tr>
                <td>3124</td>
                <td>IPA</td>
              </tr>
              <tr>
                <td>3124</td>
                <td>IPA</td>
              </tr>
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

export default StudentLandingPage
export default StudentLandingPage
