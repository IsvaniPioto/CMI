import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './RecoveryPassword.module.css';
import Footer from '../../Footer/Footer';
import { useState, useEffect } from 'react';

const RecoveryPassword = () => {
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(username && code && newPassword && confirmPassword);
  }, [username, code, newPassword, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  return (
    <>
      <div className={styles.recoveryContent}>
        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-md-8 col-lg-6 ${styles.recoveryForm}`}>
              <div className="mb-4">
                <h3><strong>Recuperar Contraseña</strong></h3>
                <p className="mb-4">Ingrese su usuario y el código enviado a su correo electrónico.</p>
              </div>
              <form onSubmit={handleSubmit} className={styles.formulario} noValidate>
                <div className={`form-group first ${styles.formGroup}`}>
                  <label htmlFor="username">Usuario</label>
                  <input
                    type="text"
                    className={`form-control ${styles.formControl}`}
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className={`form-group ${styles.formGroup}`}>
                  <label htmlFor="code">Código</label>
                  <input
                    type="text"
                    className={`form-control ${styles.formControl}`}
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className={`form-group ${styles.formGroup}`}>
                  <label htmlFor="new-password">Nueva Contraseña</label>
                  <input
                    type="password"
                    className={`form-control ${styles.formControl}`}
                    id="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className={`form-group last mb-3 ${styles.formGroup}`}>
                  <label htmlFor="confirm-password">Confirmar Contraseña</label>
                  <input
                    type="password"
                    className={`form-control ${styles.formControl}`}
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <input type="submit" value="Enviar" className={`btn text-white btn-block ${styles.btnPrimary} mb-2`} disabled={!isFormValid} />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RecoveryPassword;