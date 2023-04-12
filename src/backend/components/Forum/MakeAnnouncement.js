import './Forum.css'
import React, {useState} from 'react';
import { db } from '../../firebase';
import { ref, push } from 'firebase/database';

const MakeAn = () => {
    const [question, setAnn] = useState('');
    const [courseID, setID] = useState('');

    const addAnntoDatabase = (e) => {
        e.preventDefault();
        const annReference = ref(db, 'announcements');
        const annToSubmit = { question, courseID };
        push(annReference, annToSubmit);
    };

  return (
    <form className = 'addCourse' onSubmit={addAnntoDatabase}>
        <h1>Add Announcement</h1>
        <input className='inputfield' required type='text' placeholder='Announcement to make' value={question} onChange={(e) => setAnn(e.target.value)}></input>
        <br></br>
        <input className='inputfield' required type='text' placeholder='Course ID' value={courseID} onChange={(e) => setID(e.target.value)}></input>
        <br></br>
        <button className = 'submitcoursebutton' type='submit'>Submit</button>
    </form>
  );
};

export default MakeAn;
