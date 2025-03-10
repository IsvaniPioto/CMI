import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Alimatic</h1>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/create-user">Crear Usuario</Link>
        <Link to="/create-company">Crear Empresa</Link>
        <Link to="/login">Login</Link>
        <Link to="/recovery-password">Recuperar Contraseña</Link>
      </div>
    </nav>
  );
};

export default Navbar;
