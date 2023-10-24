import logo from './logo.svg';
import './App.css';
import Home from './modules/Dashboard';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './modules/Navbar';
import {GoogleAuthProvider} from "firebase/auth"
import './firebase'
import { auth } from './firebase';
import AlexModule from './modules/AlexPractice';

const provider = new GoogleAuthProvider();

const isSignedIn = false;



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar fixed="top" isSignedIn={isSignedIn} provider={provider} auth={auth}/>
      </header>
      <Home/>
      <AlexModule/>
    </div>
  );
}

export default App;
