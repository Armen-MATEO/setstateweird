import { useState } from "react";
// import Welcome from "./ccc";
import "./styles.css";

export default function App() {
  const [someCount, setSomeCount] = useState(0);
  const [prevSomeCount, setPrevSomeCount] = useState(someCount);
  const increment = () => {
    setSomeCount(someCount + 1);
    setPrevSomeCount(someCount);
  };
  return (
    <>
      <strong>{someCount}</strong> &gt; <strong>{prevSomeCount}</strong>
      <button onClick={increment}>increment</button>
    </>
  );
}
