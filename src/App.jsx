import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login/Login';
import Home from './pages/Home/Home';
import RecoveryPassword from './components/auth/RecoveryPassword/RecoveryPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/auth/Login/Login.module.css';
import CreateUser from './components/Admin/CreateUser';
import CreateCompany from './components/Admin/CreateCompany';

const App = () => {
  return (
    <Router>
      <div className="app-container d-flex flex-column" style={{ height: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/create-company" element={<CreateCompany />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;