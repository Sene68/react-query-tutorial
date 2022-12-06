import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import { HomePage } from './components/Home.page'
import { AnimalMeatsPage } from './components/AnimalMeats.page';
import { MeatsPage } from './components/Meats.page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/meats'>Meats</Link>
              </li>
              <li>
                <Link to='/animal-meats'>Animal Meats</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path='/meats' element={<MeatsPage />} />
          <Route path='/animal-meats' element={<AnimalMeatsPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
    
  );
}

export default App;
