import { createContext, useCallback, useState } from "react";

const ProgressContext = createContext();

const restoreProgressFromLocalStorage = () => {
  const progress = localStorage.getItem("progress");
  if (progress) {
    console.log(`restoring progress form local storage, progress is level ${progress}`)
    return +progress;
  } else {
    return undefined;
  }
};

function ProgressStore({ children }) {
  const [progress, setProgress] = useState(restoreProgressFromLocalStorage());

  const handleUnlockLevel2 = useCallback(() => {
    console.log("Updating progress: level 2");
    setProgress(2);
    localStorage.setItem("progress", 2);
  }, []);

  const handleUnlockLevel3 = useCallback(() => {
    console.log("Updating progress: level 3");
    setProgress(3);
    localStorage.setItem("progress", 3);
  }, []);

  const handleRemoveProgress = useCallback(() => {
    console.log("Removing progress");
    setProgress(1);
    localStorage.setItem("progress", 1);
  }, []);

  return (
    <ProgressContext.Provider value={{ progress, handleUnlockLevel2, handleUnlockLevel3, handleRemoveProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export { ProgressStore as default, ProgressContext };
