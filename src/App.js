import logo from "./logo.svg";
import "./App.css";
import cars from "./data/cars";

function App() {
  console.log(cars);
  return (
    <div className="App">
      {cars.map((el, index) => {
        return <img style={{height:'300px',width:'550px'}}key={index} src={el.imagePath}></img>;
      })}
    </div>
  );
}

export default App;
