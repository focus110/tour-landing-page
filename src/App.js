import "./App.css";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Menu />
    </div>
  );
}

export default App;
