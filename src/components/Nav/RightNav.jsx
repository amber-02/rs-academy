import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0em;
  gap: 2em;
  font-size: 1.2em;
  font-weight: 100;
  padding-right: 2em;
  padding-top: 1em;
  min-width: fit content;
  li {
    padding: 0px 0px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #6F9285;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    li {
      color: whitesmoke;
      padding-top: 0.8em;
    }
  }
  .login {
    margin-top: ${({ open }) => open ? '1em' : '-0.4em'};
    background-color: ${({ open }) => open ? '#335C4E' : '#4B7566'};
    color: whitesmoke;
    width: fit-content;
    padding-top: 0.3em;
    padding-bottom: 0.3em;
    padding-left: 0.7em;
    padding-right: 0.7em;
    height: fit-content;
    border-radius: 2em;
    font-size: 1em;
    border: none;
  }
  button:active {
    transform: scale(0.9);
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
        <li className='RSA' >real support academy</li>
        {/* <li style = {{ fontWeight: 'bold', fontSize: 25}} >real support academy</li> */}
        <li>about us</li>
        <li>our projects</li>
        <li>contact us</li>
        <button className='login'>log in</button>
        <button className='login'>sign up</button>
    </Ul>
  )
}

export default RightNav