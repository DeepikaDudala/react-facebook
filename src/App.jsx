import { useState } from 'react'
import './App.css'
import SignUpPage from './components/SignUpPage'
import Home from './components/Home'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindYourAccount from './components/FindYourAccount'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home displayPage={<SignUpPage />} />} />
          <Route path="/login" element={<Home displayPage={<Login />} />} />
          <Route path="/login/findyouraccount" element={<Home displayPage={<FindYourAccount />} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
