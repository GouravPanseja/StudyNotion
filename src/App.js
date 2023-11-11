import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import {Route,Routes} from 'react-router-dom';
import {useState} from 'react';
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);   // initially the user isn't logged in

  return (
    <div className="App w-screen max-h-max min-h-screen  bg-richblack-900 flex flex-col">


       <Navbar className="" isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />   {/*on the basis of login state it has to display different variables */}


        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="login" element ={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="signup" element= {<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="dashboard" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard/>
              </ProtectedRoute>
}/>
        </Routes>

    </div>
  );
}

export default App;
