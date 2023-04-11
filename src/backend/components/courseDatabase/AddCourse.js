import React, {useState} from 'react';
import { db } from '../../firebase';
import {ref, push } from 'firebase/database';
import '../../../components/Courses.css'
import './ViewCourses.css';

const AddCourseFunction=()=>{
    const [name, setName] = useState('');
    const [courseID, setID] = useState('');
    const [organiser, setOrganiser] = useState('');
    const [length, setLength] = useState('');
    const [description, setDesc] = useState('');
    const [teaching, setTeaching] = useState('online');
    
    const addCoursetoDatabase = (e) => {
        e.preventDefault();
        const courseReference = ref(db, 'courses');
        const courseData = { name, courseID, organiser, length, teaching, description};
        push(courseReference, courseData);
      };
  return (
    <div>
      <form className = 'addCourse' onSubmit={addCoursetoDatabase}>
        <h1>Add Course</h1>
        <input type='text' placeholder='Course name' value={name} onChange={(e) => setName(e.target.value)}></input>
        <br></br>
        <input type='text' placeholder='Course ID' value={courseID} onChange={(e) => setID(e.target.value)}></input>
        <br></br>
        <input type='text' placeholder='Course organiser' value={organiser} onChange={(e) => setOrganiser(e.target.value)}></input>
        <div className = 'teachingmethod'>
          <p>Method of teaching: {teaching}</p>
          <select name='teaching-method' onChange={(e) => setTeaching(e.target.value)}>
            <option value ='' disabled >Select</option>
            <option value='online' checked={teaching === 'online'}>Online</option>
            <option value='in-person' checked={teaching === 'in-person'}>In-Person</option>
            <option value='hybrid' checked={teaching === 'hybrid'}>Hybrid</option>
          </select>
        </div>
        <input style={{marginTop:'1rem'}} type='text' placeholder='Length in weeks' value={length} onChange={(e) => setLength(e.target.value)}></input>
        <br></br>

        <textarea className = 'coursedesc' placeholder=' Course description' value={description} onChange={(e) => setDesc(e.target.value)}></textarea>

        <br></br>
        <br></br>
        <br></br>
        <button className = 'submitcoursebutton' type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddCourseFunction;
