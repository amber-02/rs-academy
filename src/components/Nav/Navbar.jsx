import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  display: flex;
  background-color: #335C4E;
  margin: 0;
  color: whitesmoke;
  font-family: Arial;
  justify-content: space-between;
  .logo {
    padding: 0px;
    font-size: 2em;
    font-weight: 700;
    padding-left: 1em;
    padding-top: 0.3em;
  }
`

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                <img src='rs-academy/src/components/Nav/students-cap.png' alt="rs academy"></img>
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar