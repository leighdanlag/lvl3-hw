import { useState, useEffect } from "react";


export const useDebounce = (value: any, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(null);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("debounceValue:", value)
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(handler);
  },[value, delay]);

  return debounceValue;
};
