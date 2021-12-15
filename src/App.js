import './App.css';
import { Footer } from './components/Footer';
import { NavbarMain } from './components/Navbar';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
