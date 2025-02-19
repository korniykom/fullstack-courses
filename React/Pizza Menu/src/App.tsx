import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuDescription from "./components/MenuDescription";
import OurMenu from "./components/OurMenu";
import PizzaList from "./components/PizzaList";

function App() {
  return (
    <div className="container">
      <Header />
      <OurMenu />
      <MenuDescription />
      <PizzaList />
      <Footer />
    </div>
  );
}

export default App;
