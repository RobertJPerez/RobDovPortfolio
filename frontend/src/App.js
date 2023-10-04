import './App.css';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SiteDone from './components/SiteDone';
import LessonsLearned from './components/LessonsLearned';
import AgileInAction from './components/AgileInAction';
import DentalDevelopment from './components/DentalDevelopment';
import AIEverywhere from './components/AIEverywhere';
import RealWorldApps from './components/RealWorldApps';
import InternshipSecured from './components/InternshipSecured';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/sitedone" element={<SiteDone />} />
          <Route path="/lessonslearned" element={<LessonsLearned />} />
          <Route path="/agileinaction" element={<AgileInAction />} />
          <Route path="/dentaldevelopment" element={<DentalDevelopment />} />
          <Route path="/aieverywhere" element={<AIEverywhere />} />
          <Route path="/realworldapps" element={<RealWorldApps />} />
          <Route path="/internshipsecured" element={<InternshipSecured />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
