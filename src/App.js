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
import UserDashboard from './modules/userProfile';
import JobApplicationContent from './modules/applicationTracker';

const provider = new GoogleAuthProvider();

const isSignedIn = false;

const user = {
  id: 1,
  username: "John",
  email: "Hello@gmail.com",
  profilePhoto: "https://i.ibb.co/9TQKqGS/headshot-alex.png"
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar fixed="top" isSignedIn={isSignedIn} provider={provider} auth={auth}/>
      </header>
      <Home/>
      {/* <AlexModule/> */}
      <UserDashboard user={user}/>
      <JobApplicationContent/>
    </div>
  );
}

export default App;
