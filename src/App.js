import "./App.css";
import Footer from "./components/footer/footer";
import Navigation from "./components/nav-bar/navBar";
import PanelCuenta from "./components/panel-cuenta/panelCuenta";
import PanelSaldos from "./components/panel-saldos/panelSaldos";

function App() {
  return (
    <div className="App">
      <Navigation />
      <PanelSaldos />
      <PanelCuenta />
      <Footer />
    </div>
  );
}

export default App;
