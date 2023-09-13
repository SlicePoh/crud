
import { 
  Route,
  BrowserRouter as Router, 
  Routes,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="bg-sky-200 dark:bg-sky-950">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
