import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mint from './pages/Mint/Mint';
import MintResult from './components/MintResult/MintResult';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/mint" element={<Mint />} />
          <Route path="/mintresult" element={<MintResult />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
