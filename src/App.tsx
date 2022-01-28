import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home/Home.component';
import GameDetailContainer from './components/GameDetail/GameDetailContainer.component';
import GlobalStyles from './components/GlobalStyle/GlobalStyle';
import './App.css';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game/:gameId' element={<GameDetailContainer />} />
      </Routes>
    </>
  );
};

export default App;
