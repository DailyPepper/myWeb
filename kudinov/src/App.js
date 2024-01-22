import Navbar from "./components/Navbar";
import MainRouter from "./App/routing";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';
import style from './style/style.css'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <MainRouter/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
