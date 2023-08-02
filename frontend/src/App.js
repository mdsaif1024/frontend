import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import BrowseMockups from './components/main/BrowseMockups';
import MockupEditor from './components/user/MockupEditor';
import User from './components/user';
import Feedback from './components/main/Feedback';
import ManageMockups from './components/user/ManageMockups';
import UserProfile from './components/user/UserProfile';
import UserProvider from './context/UserProvider';
import { useState } from 'react';
import UserAuth from './auth/UserAuth'

function App() {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));



  return (
    <div>
      <BrowserRouter>
        <UserProvider currentUser={currentUser}>

          <Routes>
            <Route path='/' element={<Navigate to="/main/home" />} />
            <Route path="main" element={<Main />}>
              <Route path='home' element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='feedback' element={<Feedback />} />
            </Route>
            <Route path="user" element={<UserAuth><User /></UserAuth>}>
            {/* <Route path="user" element={<User />}> */}
              <Route path='browsemockups' element={<BrowseMockups />} />
              <Route path='mockupeditor/:mockupindex' element={<MockupEditor />} />
              <Route path='managemockup' element={<ManageMockups />} />
              <Route path='profile' element={<UserProfile />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;