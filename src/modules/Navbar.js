import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import SignIn from './SignIn';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';

const user = auth.currentUser 


function NavBar(props) {
  return (
    <Navbar className=''>
    <Container style={{backgroundColor: "blue",}}>
      <Navbar.Brand href="#home">Transparent</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
            {user ? <p>{user.displayName}</p> : <SignIn auth={props.auth} provider={props.provider} />}
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;