import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateUser.css';
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
      <div className="main-content">
        <h3 className="text-center">Crear nuevo usuario</h3>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10 create-user-form"> {/* Ajustar el ancho del formulario */}
              <form onSubmit={handleSubmit} className="formulario" noValidate>
                <div className="form-row">
                  <div className="form-group col-md-4 col-sm-6">
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
                  <div className="form-group col-md-4 col-sm-6">
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
                  <div className="form-group col-md-4 col-sm-6">
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
                <div className="form-row">
                  <div className="form-group col-md-4 col-sm-6">
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
                  <div className="form-group col-md-4 col-sm-6">
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
                  <div className="form-group col-md-4 col-sm-6">
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
                <div className="form-row">
                  <div className="form-group col-md-4 col-sm-6">
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
                  <div className="form-group col-md-4 col-sm-6">
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
                  <div className="form-group col-md-4 col-sm-6">
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
                <div className="form-row">
                  <div className="form-group col-md-4 col-sm-6">
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
                  <div className="form-group col-md-4 col-sm-6">
                    <input type="submit" value="Crear" className="btn btn-primary btn-block mb-2" />
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
