import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuDescription from "./components/MenuDescription";
import OurMenu from "./components/OurMenu";

function App() {
  return (
    <div className="container">
      <Header />
      <OurMenu />
      <MenuDescription />
      <Footer />
    </div>
  );
}

export default App;
