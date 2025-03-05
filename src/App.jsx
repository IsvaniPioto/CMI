import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="app-container d-flex">
        <div className="content-container flex-grow-1 d-flex justify-content-center align-items-center">
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;