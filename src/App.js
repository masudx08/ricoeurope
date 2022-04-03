import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mint from './pages/Mint/Mint';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/mint" element={<Mint />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
