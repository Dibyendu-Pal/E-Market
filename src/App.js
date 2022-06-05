import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Footer from './Components/Footer';
import Home from './Components/Home';
import ParticularItem from './Components/ParticularItem';
import Navbar from './Components/Navbar';
import ItemsPage from './Components/ItemsPage';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light')
  function darkmodeHandler() {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }
  return (
    <BrowserRouter>
      <Navbar mode={mode} darkmodeHandler={darkmodeHandler} />
      <Routes>
        <Route path='/' element={<Home mode={mode} />} />
        <Route path='/item/:id' element={<ParticularItem />} />
        <Route path='/itempage/:category' element={<ItemsPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    // <>
    // <Navbar/>
    // <Home/>
    // {/* <Items/> */}
    // </>
  );
}

export default App;
