import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Prices from "./components/Prices";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <About />
      <Prices />
      <Footer />
    </>
  );
}
