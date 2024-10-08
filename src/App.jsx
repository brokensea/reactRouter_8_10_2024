import aboutImage from './assets/build/about.png';
import teamImage from './assets/build/group.png';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <Link to="/about">
          <img src={aboutImage} className="logo" alt="About logo" />
          About
        </Link>
        <Link to="/team">
          <img src={teamImage} className="logo" alt="Team logo" />
          Team
        </Link>
      </div>
    </>
  )
}

export default App;
