import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Visualization from './pages/Visualization';
import Result from './pages/Result';
import AdvancedTools from './pages/AdvancedTools';
import Benchmarking from './pages/Benchmarking';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pl-64">
        <Routes>
          <Route path="/" element={<Visualization />} />
          <Route path="/result" element={<Result />} />
          <Route path="/advanced-tools" element={<AdvancedTools />} />
          <Route path="/benchmarking" element={<Benchmarking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
