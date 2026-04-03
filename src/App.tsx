import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Competences from "./components/Competences";
import Footer from "./components/Footer";
import Projet from "./components/Projet";

function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <About />
      <div className="p-5 md:px-[15%]">
        <Competences />
      </div>
      <Projet />
      <Footer />
    </div>
  );
}

export default App;
