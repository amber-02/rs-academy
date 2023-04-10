import React, {useState} from 'react';
import { db } from '../../firebase';
import {ref, push } from 'firebase/database';
// import '/Users/amberkhandwalla/rs-academy/src/components/Courses.css';

const AddCourseFunction=()=>{
    const [name, setName] = useState('');
    const [courseID, setID] = useState('');
    const [organiser, setOrganiser] = useState('');
    const [length, setLength] = useState('');
    const [description, setDesc] = useState('');
    const [teaching, setTeaching] = useState('');
    
    const addCoursetoDatabase = (e) => {
        e.preventDefault();
        const courseReference = ref(db, 'courses');
        const courseData = { name, courseID, organiser, length, teaching, description};
        push(courseReference, courseData);
      };
  return (
    <div>
      <form onSubmit={addCoursetoDatabase}>
        <h1>Add Course</h1>
        <input style={{marginBottom:'1rem'}} type='text' placeholder='Course name' value={name} onChange={(e) => setName(e.target.value)}></input>
        <input type='text' placeholder='Course ID' value={courseID} onChange={(e) => setID(e.target.value)}></input>
        <input type='text' placeholder='Course organizer' value={organiser} onChange={(e) => setOrganiser(e.target.value)}></input>
        <div>
          <p>Method of teaching:</p>
          <input type='radio' name='teaching-method' value='online' checked={teaching === 'online'} onChange={() => setTeaching('online')}></input>Online
          <input type='radio' name='teaching-method' value='in-person' checked={teaching === 'in-person'} onChange={() => setTeaching('in-person')}></input>In-Person
          <input type='radio' name='teaching-method' value='hybrid' checked={teaching === 'hybrid'} onChange={() => setTeaching('hybrid')}></input>Hybrid
        </div>
        <input style={{marginTop:'1rem'}} type='text' placeholder='Length in weeks' value={length} onChange={(e) => setLength(e.target.value)}></input>
        <textarea placeholder='Course description' value={description} onChange={(e) => setDesc(e.target.value)}></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddCourseFunction;
