import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main/Main';
import Question from './components/Main/Question';
import { useAuth } from './context/AuthContext';
import Login from './components/Auth/Login';

function App() {
   const { login, logout } =useAuth();
  useEffect(() => {
    const checkSession = () => {
      fetch('http://localhost:8000/session', {
        method: 'POST',
        credentials: 'include',
      }).then((response) => {
        if(response.status === 200){
          login();
        }else {
          logout();
        }
      })
    }
    checkSession();
  }, []); 

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/question/:id' element={<Question />} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
