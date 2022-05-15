import React from 'react'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './home';
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/home' element={<Home/>} />
      </Routes>
    
    </Router>
    </>
  );
}

export default App;
