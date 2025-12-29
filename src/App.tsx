import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Report from "./components/Report";
import { FormContextProvider } from "./context/index";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="relative">
      <FormContextProvider>
        <Form setShowResults={setShowResults} />
        <Report isReady={showResults} />
        <Analytics />
      </FormContextProvider>
      <a
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-5 bottom-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-green-300/65"
      >
        <img src="/arrow-up.svg" alt="anchor navigation icon" />
      </a>
    </div>
  );
}

export default App;
