import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/Home.page'
import { AnimalMeetsPage } from './components/AnimalMeets.page';
import { MeetsPage } from './components/Meets.page';

function App() {
  return (
    <Router>
      
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/meets'>Meets</Link>
            </li>
            <li>
              <Link to='/animal-meets'>Animal Meets</Link>
            </li>
          </ul>
        </nav>

      </div>
      <Routes>
        <Route path='/meets' element={<MeetsPage />} />
        <Route path='/animal-meets' element={<AnimalMeetsPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
