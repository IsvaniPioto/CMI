import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menú</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/create-user">Crear Usuario</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/recovery-password">Recuperar Contraseña</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
