import "./App.css";
import { Slider } from "./components/Slider";
import { Images } from "./data/testImages";

function App() {
  return (
    <div className="App">
      <h1>Carousel</h1>
      <Slider images={Images} />
    </div>
  );
}

App.displayName = "App";

export default App;
