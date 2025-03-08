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
      </div>
    </nav>
  );
}

export default Navbar;
