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
import BabyMama from './components/BreedResult/BabyMama';
import BabyThief from './components/BreedResult/BabyThief';
import Failure from './components/BreedResult/Failure';
import Guard from './components/BreedResult/Guard';
import Leader from './components/BreedResult/Leader';
import Member from './components/BreedResult/Member';
import Police from './components/BreedResult/Police';
import Spy from './components/BreedResult/Spy';
import Thief from './components/BreedResult/Thief';
import Twin from './components/BreedResult/Twin';
import Triplet from './components/BreedResult/Triplet';
import PageCheck from './pages/PageCheck/PageCheck';
import SwagSuccess from './components/BreedResult/SwagSuccess';
import ChangeName from './components/BreedResult/ChangeName';
import LeaderBoard from './pages/LeaderBoard/LeaderBoard';
import NftView from './pages/NftView/NftView';
import Map from './pages/Map/Map';
import Meet from './pages/Meet/Meet';
import Swap from './pages/Swap/Swap';
import Store from './pages/Store/Store';
import Vault from './pages/Vaults/Vault';
import Swag8 from './pages/Swag8/Swag8';
import Land from './pages/Land/Land';
import Advertise from './pages/Advertise/Advertise';
import Gangs from './pages/Gangs/Gangs';

export const MyContext = React.createContext()
function App() {
const [staking, setStaking] = useState('stake')
const [leaderboard, setLeaderboard] = useState('leader')
const [advertise, setAdvertise] = useState('billboard')
const defaultValue={
  staking, setStaking,
  leaderboard,  setLeaderboard,
  advertise, setAdvertise
}
  return (
    <MyContext.Provider value={defaultValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/pagecheck" element={<PageCheck />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/mintresult" element={<MintResult />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/swag" element={<Swag />} />
          <Route path="/breed" element={<Breeding />} />
          <Route path="/jail" element={<Jail />} />

          <Route path="/b/babymama" element={<BabyMama />} />
          <Route path="/b/babythief" element={<BabyThief />} />
          <Route path="/b/failure" element={<Failure />} />
          <Route path="/b/guard" element={<Guard />} />
          <Route path="/b/leader" element={<Leader />} />
          <Route path="/b/member" element={<Member />} />
          <Route path="/b/police" element={<Police />} />
          <Route path="/b/spy" element={<Spy />} />
          <Route path="/b/thief" element={<Thief />} />
          <Route path="/b/twin" element={<Twin />} />
          <Route path="/b/triplet" element={<Triplet />} />

          {/* 2nd  Milestone  */}
          <Route path="/swagsuccess" element={<SwagSuccess />} /> 
          <Route path="/changename" element={<ChangeName />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/nftview" element={<NftView />} />
          <Route path="/map" element={<Map />} />
          <Route path="/meet" element={<Meet />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/store" element={<Store />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/swag8" element={<Swag8 />} />
          <Route path="/land" element={<Land />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/gangs" element={<Gangs />} />



          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
