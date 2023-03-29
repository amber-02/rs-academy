import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import './Navbar.css';

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  position: sticky;
  background-color: #335C4E;
  margin: 0px;
  color: whitesmoke;
  font-family: Arial;
  justify-content: space-between;

  .logo {
    font-size: 2em;
    font-weight: 700;
    padding-left: 13.5em;
    padding-top: 0.9em;
  }
  .login {
    margin-top: 1em;
    margin-left: ${({ open }) => open ? '0em' : '1em'};
    background-color: ${({ open }) => open ? '#335C4E' : 'whitesmoke'};
    color: ${({ open }) => open ? '#whitesmoke' : '#335C4E'};
    width: fit-content;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 0.8em;
    padding-right: 0.8em;
    height: fit-content;
    border-radius: 2em;
    font-size: 1.2em;
    font-weight: 700;
    border: none;
    min-width: max-content;
  }
  button:active {
    transform: scale(0.9);
  }
`

const Navbar = () => {
    return (
        <Nav>
            <button className='login'>Sign in</button>
            <div className="logo">
                {/* <img src='rs-academy/src/components/Nav/students-cap.png' alt="rs academy"></img> */}
                <img style={{ width: 50, height: 50 }} src='logo-cap.png' alt="rs academy"></img>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar