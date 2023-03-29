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
  width: inherit;
  position: absolute;
  float: right;
  margin-right: 2em;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #4B7566;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
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

`;

const RightNav = ({ open }) => {
  return (
    <>
      <Ul open={open}>
        {/* this bit is for the logo at the top in the middle of the nav bar - not allowing me to link CSS to move up */}
          {/* <img className= 'logo' style={{ width: 60, height: 60 }} src='logo-cap.png' alt="rs academy" ></img> */}
          <li>about us</li>
          <li>our projects</li>
          <li>contact us</li>
      </Ul>
    </>
  )
}

export default RightNav