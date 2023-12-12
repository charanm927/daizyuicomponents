import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Header2 from "./components/Header2";
import Hero2 from "./components/Hero2";
import Footer2 from "./components/Footer2";
import Main2 from "./components/Main2";

function App() {
  return (
    <div>
      <Header2 />
      <Hero2 />
      <Main2 />
      <Footer2 />

      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
