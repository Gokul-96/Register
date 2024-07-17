import React from 'react'
import {BrowserRouter as Router, Routes,Route, Navigate} from 'react-router-dom';
import SignUp from "./pages/SignUp"
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
    <Routes>
        <Route path= '/' element={<SignUp/>}/>
        <Route path= '/logIn' element={<LogIn/>}/>
        <Route path= '/profile' element={<Profile/>}/>
    </Routes>
</Router>
  )
}

export default App