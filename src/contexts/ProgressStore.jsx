import { createContext, useCallback, useState } from "react";

const ProgressContext = createContext();

function ProgressStore({ children }) {
  const [progress, setProgress] = useState(1);

  const handleUpLevel2 = useCallback(() => {
    console.log("Updating progress level 2");
    setProgress(2);
    localStorage.setItem("progress", 2);
  }, []);

  const handleUpLevel3 = useCallback(() => {
    console.log("Updating progress level 3");
    setProgress(3);
    localStorage.setItem("progress", 3);
  }, []);

  const handleRemoveProgress = useCallback(() => {
    console.log("Removing progress");
    setProgress(1);
    localStorage.setItem("progress", 1);
  }, []);

  return (
    <ProgressContext.Provider value={{ progress, handleUpLevel2, handleUpLevel3, handleRemoveProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export { ProgressStore as default, ProgressContext };
