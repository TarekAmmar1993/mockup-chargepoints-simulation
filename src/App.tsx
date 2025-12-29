import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Report from "./components/Report";
import { FormContextProvider } from "./context/index";
import { Analytics } from "@vercel/analytics/next";

function App() {
  const [showResults, setShowResults] = useState(false);

  return (
    <>
      <FormContextProvider>
        <Form toggleDisplayResults={() => setShowResults(true)} />
        <Report isReady={showResults} />
        <Analytics />
      </FormContextProvider>
    </>
  );
}

export default App;
