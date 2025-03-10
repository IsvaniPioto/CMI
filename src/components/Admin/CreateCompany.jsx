import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CreateCompany.module.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const CreateCompany = () => {
  const [formData, setFormData] = useState({
    codigoReup: '',
    nombre: '',
    alias: '',
    provincia: '',
    municipio: '',
    direccion: '',
    sitioWeb: '',
    oac: '',
    industria: ''
  });

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
        <h3 className={styles.h3TextCenter}>Crear nueva empresa</h3>
        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-md-12 col-lg-10 ${styles.createCompanyForm}`}> {/* Ajustar el ancho del formulario */}
              <form onSubmit={handleSubmit} className={styles.formulario} noValidate>
                <div className={styles.formRow}>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="codigoReup">Código REUP</label>
                    <input
                      type="text"
                      className="form-control"
                      id="codigoReup"
                      name="codigoReup"
                      value={formData.codigoReup}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="nombre">Nombre</label>
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
                    <label htmlFor="alias">Alias</label>
                    <input
                      type="text"
                      className="form-control"
                      id="alias"
                      name="alias"
                      value={formData.alias}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="provincia">Provincia</label>
                    <input
                      type="text"
                      className="form-control"
                      id="provincia"
                      name="provincia"
                      value={formData.provincia}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="municipio">Municipio</label>
                    <input
                      type="text"
                      className="form-control"
                      id="municipio"
                      name="municipio"
                      value={formData.municipio}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="direccion">Dirección</label>
                    <input
                      type="text"
                      className="form-control"
                      id="direccion"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="sitioWeb">Sitio Web</label>
                    <input
                      type="text"
                      className="form-control"
                      id="sitioWeb"
                      name="sitioWeb"
                      value={formData.sitioWeb}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="oac">OAC</label>
                    <input
                      type="text"
                      className="form-control"
                      id="oac"
                      name="oac"
                      value={formData.oac}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={`form-group col-md-4 col-sm-6 ${styles.formGroup}`}>
                    <label htmlFor="industria">Industria</label>
                    <input
                      type="text"
                      className="form-control"
                      id="industria"
                      name="industria"
                      value={formData.industria}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </form>
              <div className={`form-row justify-content-center mt-3 ${styles.rowJustifyContentCenter}`}>
                <div className={`form-group col-md-3 col-sm-4 ${styles.formGroup}`}>
                  <input type="submit" value="Crear" className={`btn text-white btn-block ${styles.btnPrimary} mb-2 btn-sm`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateCompany;
