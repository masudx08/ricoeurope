import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mint from './pages/Mint/Mint';
import MintResult from './components/MintResult/MintResult';
import Staking from './pages/Staking/Staking';
import Swag from './pages/Swag/Swag';
import Breeding from './pages/Breeding/Breeding';
import Jail from './pages/Jail/Jail';
export const MyContext = React.createContext()
function App() {
const [staking, setStaking] = useState('stake')
const defaultValue={
  staking, setStaking
}
  return (
    <MyContext.Provider value={defaultValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/mint" element={<Mint />} />
          <Route path="/mintresult" element={<MintResult />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/swag" element={<Swag />} />
          <Route path="/breed" element={<Breeding />} />
          <Route path="/jail" element={<Jail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
