import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <h1>Bienvenido a Nourish</h1>
      <p>Este es el panel de control del Ministerio de la Industria Alimentaria (MINAL).</p>
      <Footer />
    </div>
  );
}

export default Home;
