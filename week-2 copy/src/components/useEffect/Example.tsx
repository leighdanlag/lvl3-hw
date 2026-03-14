import React, { useEffect, useState } from "react";

export const Example = () => {
  /**
     * Common use cases:
        - Fetching data from an API
        - Subscribing/unsubscribing to events (resize, keydown, websockets)
        - Timers/intervals
        - Reading/writing localStorage
   */
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    console.log("mounting");
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 1. empty dependency array []
  // 2. some value in dependency array [name]
  // 3. no dependency runs on every render

  return <div>{windowSize.width}</div>;
};
