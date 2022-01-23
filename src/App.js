import logo from "./logo.svg";
import "./App.css";
import HeaderBar from "./Components/HeaderBar"
import CarsList from "./Components/CarsList"

function App() {

  return (
    <div className="App">
      <HeaderBar />
      <CarsList />
    </div>
  );
}

export default App;
