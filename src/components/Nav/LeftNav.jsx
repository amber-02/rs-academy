import React from 'react';
import styled from 'styled-components';
import './Navbar.css';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0em;
  gap: 2em;
  font-size: 1.2em;
  font-weight: 100;
  padding-top: 1.6em;
  min-width: fit content;
  position: fixed;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #4B7566;
    position: fixed;
    transform: ${({ open }) => open ? 'translate(0%)' : 'translate(100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;

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
          <li><a href="About.jsx">about us</a></li>
          <li><a href="Projects.jsx">our projects</a></li>
          <li><a href="Contact.jsx">contact us</a></li>
      </Ul>
    </>
  )
}

export default LeftNav