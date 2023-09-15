
import { 
  Route,
  BrowserRouter as Router, 
  Routes,
  Navigate
} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';


function App() {
  const {user}=useAuthContext()
  return (
    <div className="bg-sky-300 dark:bg-sky-950  min-h-screen w-full overflow-hidden">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
          <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/"/>}/>
          <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
