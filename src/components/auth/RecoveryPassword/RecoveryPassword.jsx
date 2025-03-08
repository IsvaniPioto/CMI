import 'bootstrap/dist/css/bootstrap.min.css';
import './RecoveryPassword.css';

const RecoveryPassword = () => {
  return (
    <div className="recovery-content d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 recovery-form">
            <div className="mb-4">
              <h3><strong>Recuperar Contraseña</strong></h3>
              <p className="mb-4">Ingrese su usuario y el código enviado a su correo electrónico.</p>
            </div>
            <form className="formulario" noValidate>
              <div className="form-group first">
                <label htmlFor="username">Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="code">Código</label>
                <input
                  type="text"
                  className="form-control"
                  id="code"
                />
              </div>
              <div className="form-group">
                <label htmlFor="new-password">Nueva Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="new-password"
                />
              </div>
              <div className="form-group last mb-3">
                <label htmlFor="confirm-password">Confirmar Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                />
              </div>
              <input type="submit" value="Enviar" className="btn text-white btn-block btn-primary mb-2" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecoveryPassword;