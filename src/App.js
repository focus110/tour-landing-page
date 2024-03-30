import "./App.css";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="w-full">
      <Topbar />
      <Navbar />
      <Menu />
      <Banner />
    </div>
  );
}

export default App;
