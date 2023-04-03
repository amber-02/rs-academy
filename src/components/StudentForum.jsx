import React, { useState } from 'react';
import './StudentForum.css';

const StudentForum = () => {
  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts([...posts, inputValue]);
    setInputValue('');
  };

  return (
    <div className = 'content'>
        <div className = 'divstuff'> 
            <img className='rs-logo' src='graphic6.gif' alt="graphic 6"></img>
        </div>
      <h1 className = 'title'>Student Forum</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} required/>
        <div class = 'buttons'>
            <button type="submit" id = 'post'>Post</button>
        </div>
      </form>
      <div>
        {posts.map((post, index) => (
          <div key={index}>{post}</div>
        ))}
      </div>
    </div>
  );
};

export default StudentForum;
