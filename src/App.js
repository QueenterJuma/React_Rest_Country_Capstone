import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Countryinfo from './components/Countryinfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:code" element={<Countryinfo />} />
      </Routes>
    </div>
  );
}

export default App;
