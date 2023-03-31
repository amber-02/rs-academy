import React from 'react';
import styled from 'styled-components';
import './Navbar.css';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0em;
  gap: 1em;
  font-size: 1.2em;
  font-weight: 100;
  padding-top: 1.6em;
  min-width: fit content;
  position: absolute;
  right: 0;
  margin-right: 2em;
  // border: 4px solid red;

  @media (max-width: 874px) {
    flex-flow: column nowrap;
    background-color: #4B7566;
    display: flex;
    transform: ${({ open }) => open ? 'translate(0%)' : 'translate(100%)'};
    top: 0;
    right: -2em;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in;

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
        {/* this bit is for the logo at the top in the middle of the nav bar - not allowing me to link CSS to move up */}
          {/* <img className= 'logo' style={{ width: 60, height: 60 }} src='logo-cap.png' alt="rs academy" ></img> */}
          <li><a href="../../login/Login.js">about us</a></li>
          <li><a href="Projects.jsx">our projects</a></li>
          <li><a href="Contact.jsx">contact us</a></li>
        <li><button className='login'>Sign in</button></li>

      </Ul>
    </>
  )
}

export default LeftNav