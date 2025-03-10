import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CreateUser.module.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const CreateUser = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    email: '',
    password: '',
    cargo: '',
    empresa: '',
    telefonoMovil: '',
    telefonoFijo: '',
    username: ''
  });

  useEffect(() => {
    const { nombre, primerApellido, segundoApellido } = formData;
    if (nombre && primerApellido && segundoApellido) {
      const username = `${nombre.replace(/\s+/g, '')}${primerApellido.charAt(0)}${segundoApellido.charAt(0)}`.toLowerCase();
      setFormData((prevData) => ({ ...prevData, username }));
    }
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className={styles.mainContent}>
        <h3 className={styles.h3TextCenter}>Crear nuevo usuario</h3>
        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-md-12 col-lg-10 ${styles.createUserForm}`}> {/* Ajustar el ancho del formulario */}
              <form onSubmit={handleSubmit} className={styles.formulario} noValidate>
                <div className={styles.formRow}>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="nombre">Nombre(s)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="primerApellido">Primer Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      id="primerApellido"
                      name="primerApellido"
                      value={formData.primerApellido}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="segundoApellido">Segundo Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      id="segundoApellido"
                      name="segundoApellido"
                      value={formData.segundoApellido}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="username">Nombre de Usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="cargo">Cargo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cargo"
                      name="cargo"
                      value={formData.cargo}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="empresa">Empresa</label>
                    <input
                      type="text"
                      className="form-control"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="telefonoMovil">Teléfono Móvil</label>
                    <input
                      type="text"
                      className="form-control"
                      id="telefonoMovil"
                      name="telefonoMovil"
                      value={formData.telefonoMovil}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="telefonoFijo">Teléfono Fijo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="telefonoFijo"
                      name="telefonoFijo"
                      value={formData.telefonoFijo}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={`form-row justify-content-center mt-3 ${styles.rowJustifyContentCenter}`}>
                  <div className={`form-group col-md-3 col-sm-4 ${styles.formGroup}`}>
                    <input type="submit" value="Crear" className={`btn text-white btn-block ${styles.btnPrimary} mb-2 btn-sm`} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateUser;
