import React from 'react';
import { Routes,Route } from 'react-router-dom';

//styles
import './App.css'

//components
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import TopButton from './components/TopButton';



function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
      <TopButton />
    </div>
  );
}

export default App;
