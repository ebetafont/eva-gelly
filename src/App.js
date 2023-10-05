
import './App.css'

import {Navbar, Secret} from './Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'

import {useContext} from 'react'
import {DataContext} from './globals/dataContext'

import { Route, Routes, Navigate } from 'react-router-dom'
import { ProtectRoute } from './components/ProtectRoute'

function App() {
  const {contextData} = useContext(DataContext)

  return (
    <>
      <div className={`boddy-g ${contextData.themeSite}`}>
        <div className="container">
          <Navbar />
          <Routes>
            <Route element={<ProtectRoute />}>
              <Route index path="/" element = {<Home />} />
            </Route>
            
            <Route path="/login" element = {<Login />} />
            <Route path="/create-account" element = {<CreateAccount />} />
            <Route path="*" element = {<Navigate to='/' />} />

            <Route path="/secret" element = {<ProtectRoute><Secret /></ProtectRoute>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;
