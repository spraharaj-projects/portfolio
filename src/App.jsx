import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ParticleAbout from "./components/ParticleAbout";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Home /> */}
        {/* <About /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
