import "./App.css";
import Accordion from "./components/accordion";
import CustomHookChallenge from "./components/custom-hook";
import RandomColor from "./components/random-color";

function App() {
  return (
    <>
      <CustomHookChallenge />
      <hr style={{ marginTop: "100px", marginBottom: "100px" }} />
      <RandomColor />
      <hr style={{ marginTop: "100px", marginBottom: "100px" }} />
      <Accordion />
    </>
  );
}

export default App;
