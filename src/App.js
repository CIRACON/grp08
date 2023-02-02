import logo from './logo.svg';
import './App.css';
import Films from './components/Films.js';
import Planets from './components/Planets.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/films">Films</Link>&nbsp;
          <Link to="/planets">Planets</Link>&nbsp;
        </nav>
        <Routes>
          <Route path='/films/*' element={<Films />} />
          {/* <Route path='/planets/*' element={<Planets />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
