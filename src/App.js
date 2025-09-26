import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/about/b';
import Navbar from './components/navbar';
import Projects from './components/projects/projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
