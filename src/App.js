import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Countryinfo from './pages/Countryinfo';
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
