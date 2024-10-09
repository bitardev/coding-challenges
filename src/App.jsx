import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";

function App() {
  return (
    <>
      <RandomColor />
      <hr style={{ marginTop: "100px", marginBottom: "100px" }} />
      <Accordion />
    </>
  );
}

export default App;
