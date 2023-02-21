import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Code to run when component mounts
    console.log("Mounted");
    return () => {
      // Code to run when component unmounts
      console.log("Unmounted");
    };
  }, []);

  useEffect(() => {
    // Code to run when count state updates
    console.log("Count updated");
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
