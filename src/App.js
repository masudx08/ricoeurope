import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Mint from './pages/Mint/Mint';
const Mint = React.lazy(() => {
  return import('./pages/Mint/Mint')
})
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/mint" element={
            <Suspense fallback={'loading'}>
              <Mint />
            </Suspense>
          } />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
