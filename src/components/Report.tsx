import { useEffect, useState } from "react";
import Loading from "./Loading";
import ResultsContent from "./ResultsContent";

const Report = ({ isReady }: { isReady: boolean }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isReady) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isReady]);

  return (
    <div id="report" className="py-6">
      {isLoading ? (
        <Loading />
      ) : isReady ? (
        <ResultsContent />
      ) : (
        <div>no results</div>
      )}
    </div>
  );
};

export default Report;
