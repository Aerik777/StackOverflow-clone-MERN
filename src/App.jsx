import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main/Main';
import Question from './components/Main/Question';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/question/:id' element={<Question />} />
          <Route
            path='*'
            element={<h1 className=''>Page not found</h1>}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
