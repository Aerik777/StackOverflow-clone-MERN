import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main/Main';
import Question from './components/Main/Question';



const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter> <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/question/:id" element={<Question />} />
         <Route path='*' element={<h1 className=''>Page not found</h1>}></Route>
         </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App

