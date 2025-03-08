import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login/Login';
import Home from './pages/home/Home';
import RecoveryPassword from './components/auth/RecoveryPassword/RecoveryPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/auth/Login/Login.css';

const App = () => {
  return (
    <Router>
      <div className="app-container d-flex flex-column" style={{ height: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;