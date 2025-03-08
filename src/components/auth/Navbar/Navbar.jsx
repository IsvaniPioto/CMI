import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.split('/').filter(path => path); // Filtra rutas vacías
  const currentPage = path.length > 0 ? path[path.length - 1] : 'Inicio'; // Obtiene el último segmento de la ruta

  const handleBreadcrumbClick = (index) => {
    const newPath = '/' + path.slice(0, index + 1).join('/');
    navigate(newPath);
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Nourish
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/features" className="nav-link">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/disabled" className="nav-link disabled">
                Disabled
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="breadcrumb-container">
        {path.map((segment, index) => (
          <span key={index} className="breadcrumb-item" onClick={() => handleBreadcrumbClick(index)}>
            {segment.charAt(0).toUpperCase() + segment.slice(1)}
          </span>
        ))}
        <span className="breadcrumb-item active">
          {currentPage.charAt(0).toUpperCase() + currentPage.slice(1) || 'Inicio'}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
