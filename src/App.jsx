import "./App.css";
import Banner from "./assets/Components/Banner/Banner";
import Navbar from "./assets/Components/NavBar/Navbar";

function App() {
  return (
    <>
      <div className="md:max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
