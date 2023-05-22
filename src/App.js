// App.js
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route element={NotFound} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
