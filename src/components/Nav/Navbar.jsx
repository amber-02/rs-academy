import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import './Navbar.css';

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  position: fixed;
  background-color: #335C4E;
  margin-top: 0px;
  color: whitesmoke;
  font-family: Arial;
  // justify-content: space-around;
  justify-content: space-between;

  z-index: 10;
  border: 3pt solid red;

  .login {
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
    display: flex;
    position: absolute left;
    justify-content: end;
  }
  button:active {
    transform: scale(0.9);
  }
  button {
    margin-top: -0.75em;
  }

  nav {
    width: 100%;
  }

  .RSA {
    font-size: ${({ open }) => open ? '1.6em' : '2em'};
    color: ${({ open }) => open ? '#whitesmoke' : 'whitesmoke'};
    font-weight: 700;
    min-width: fit-content;
    margin-top: 0;
    margin-bottom: 0;
    // visibility: ${({ open }) => open ? 'hidden' : 'visible'};
  }

  .title {
    display: flex;
    position: relative;
    width: inherit;
    align-items: center;
    // justify-content: center;
  }

  .logo {
    margin-top: 0.2em;
  }

`

const Navbar = () => {
    return (
      <>
        <Nav>
        <div className="title">
                {/* <img src='rs-academy/src/components/Nav/students-cap.png' alt="rs academy"></img> */}
              <img className="logo" style={{width: 35, height: 35}} src='logo-cap.png' alt="rs academy"></img>
              {/* <p className='RSA' >real support academy</p> */}
              <p className='RSA'><a href="../">real support academy</a></p>
            </div>
            <Burger />
          
        </Nav>
      </>
    )
}

export default Navbar