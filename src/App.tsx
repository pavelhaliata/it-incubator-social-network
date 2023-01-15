import React from 'react';
import { Routes } from 'react-router-dom';
import s from './App.module.scss'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (

    <div className={s.container}>
      <Header className={s.header} />
      <Sidebar className={s.sidebar} />
      <Main className={s.main} />
      <Footer className={s.footer} />
    </div>

  );
}

export default App;
