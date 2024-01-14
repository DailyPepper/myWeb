import Navbar from "./components/Navbar";
import mainRouter from "./App/routing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <mainRouter/>
      <Footer/>
    </>
  );
}

export default App;
