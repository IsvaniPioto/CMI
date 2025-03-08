import './Home.css';
import Navbar from '../components/auth/Navbar/Navbar';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <h1>Bienvenido a Nourish</h1>
      <p>Este es el panel de control del Ministerio de la Industria Alimentaria (MINAL).</p>
    </div>
  );
}

export default Home;
