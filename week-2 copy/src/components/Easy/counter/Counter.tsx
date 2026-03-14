import React, { useState } from "react";

/**
 * Build a Counter component that increments by a step value passed in as a prop.
 * - Create a state variable
 * - Display the current count
 * - Create 3 buttons
 *      - button 1 increases count by 1
 *      - button 2 decreases count by 1
 *      - button 3 resets count to 0
 */

export const Counter = () => {
  const [count, setCount] = useState(0); // useState gets initialized

  // what is the value of count after i call this function
  function buttonClick() {
    setCount(prev => prev + 1); // 1
    setCount(prev => prev + 1); // 2
    setCount(0);
  }

  return (
    <div>
      {count}

      {/* function */}
      <button onClick={setCount(count + 1)}></button>

      {/* callback function  */}
      <button onClick={() => setCount(count + 1)}></button>
      <button></button>
    </div>
  );
};
