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

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Navigate to="/main/home" />} />
          <Route path="main" element={<Main />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='browsemockups' element={<BrowseMockups />} />
            <Route path='feedback' element={<Feedback />} />
          </Route>
          <Route path="user" element={<User />}>
            <Route path='mockupeditor/:mockupindex' element={<MockupEditor />} />
            <Route path='managemockup' element={<ManageMockups />} />
            <Route path='profile' element={<UserProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;