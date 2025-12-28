import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Report from "./components/Report";

function App() {
  const [showResults, setShowResults] = useState(false);

  return (
    <>
      <Form toggleDisplayResults={() => setShowResults(true)} />
      <Report isReady={showResults} />
    </>
  );
}

export default App;
