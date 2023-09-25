
import './App.css';

import Navbar from './Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

import { Route, Routes } from 'react-router-dom';
import {useContext} from 'react';
import {DataContext} from './globals/dataContext';

function App() {
  const {contextData} = useContext(DataContext);

  return (
    <>
      <div className={`${contextData}`}>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/create-account" element = {<CreateAccount />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
