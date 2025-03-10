import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../Footer/Footer'; // Importar el componente Footer

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;
    if (!username) {
      setUsernameError('El nombre de usuario es obligatorio');
      hasError = true;
    } else {
      setUsernameError('');
    }
    if (!password) {
      setPasswordError('La contraseña es obligatoria');
      hasError = true;
    } else {
      setPasswordError('');
    }
    if (hasError) return;

    try {
      const response = await axios.post('http://192.168.173.210:8000/apiv1/login/', {
        username,
        password,
      });
      const token = response.data.token;
      console.log('Login successful:', token);
      // Guardar el token en el almacenamiento local o manejarlo según sea necesario
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Error during login:', error);
      // Manejar el error aquí
    }
  };

  return (
    <>
      <div className="login-content d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <img src="/src/assets/images/Login/vectorLogin.svg" alt="Image" className="img-fluid vector-login" />
            </div>
            <div className="col-lg-6 col-md-12 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <h3 className="login-title"><strong>Nourish</strong></h3>
                    <p className="mb-4">Panel de Control del Ministerio de la Industria Alimentaria (MINAL).</p>
                  </div>
                  <form onSubmit={handleSubmit} className="formulario" noValidate>
                    <div className="form-group first">
                      <label htmlFor="username">Usuario</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      {usernameError && <div className="error-message">{usernameError}</div>}
                    </div>
                    <div className="form-group last mb-3">
                      <label htmlFor="password">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {passwordError && <div className="error-message">{passwordError}</div>}
                    </div>
                    <div className="d-flex mb-4 align-items-center justify-content-between">
                      <label className="control control--checkbox mb-0">
                        <span className="caption">Recordar usuario</span>
                        <input
                          type="checkbox"
                        />
                        <div className="control__indicator"></div>
                      </label>
                      <span className="forgot-pass-container">
                        <Link to="/recovery-password" className="forgot-pass">Recuperar contraseña</Link>
                      </span>
                    </div>
                    <input type="submit" value="Acceder" className="btn text-white btn-block btn-primary mb-2" />
                    <span className="d-block text-center my-2 text-muted"> Información en:</span>
                    <div className="social-login d-flex justify-content-center">
                      <a href="#" className="facebook mx-2">
                        <img src="/src/assets/images/Icons/facebook-logo.png" alt="Facebook" className="icon" />
                      </a>
                      <a href="#" className="twitter mx-2">
                        <img src="/src/assets/images/Icons/x.png" alt="X" className="icon" />
                      </a>
                      <a href="#" className="google mx-2">
                        <img src="/src/assets/images/Icons/whatsapp.png" alt="Whatsapp" className="icon" />
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Agregar el componente Footer */}
    </>
  );
}

export default Login;
