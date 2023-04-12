import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './Navbar.css';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0.4em;
  gap: 1.5em;
  font-size: 1em;
  font-weight: 100;
  padding-top: 1.6em;
  min-width: fit content;
  position: absolute;
  right: 0;
  margin-right: 2em;
  // border: 4px solid red;

  @media (max-width: 904px) {
    flex-flow: column nowrap;
    background-color: #4B7566;
    display: flex;
    transform: ${({ open }) => open ? 'translate(0%)' : 'translate(100%)'};
    top: 0;
    right: -2em;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in;

    .login {
      margin-top: 5px;
    }

    li {
      color: whitesmoke;
      padding-top: 0.4em;
    }
  }

  li {
    min-width: max-content;
  }

  a {
    color: whitesmoke;
    text-decoration: none;
  }

`;

const LeftNav = ({ open }) => {
  return (
    <>

      <Ul open={open}>
          
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/projects">Our Projects</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/forum">Forum</Link></li>
          
        <li><button onClick={event =>  window.location.href='/signin'}className='login'>Sign Out</button></li>

      </Ul>
    </>
  )
}

export default LeftNav