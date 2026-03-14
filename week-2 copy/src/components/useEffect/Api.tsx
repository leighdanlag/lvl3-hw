import { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { useDebounce } from "../../hooks/useDebounce";

// https://randomuser.me/api/?results=10

/**
 * Goal: Fetch when dependency changes.
    - Task: fetch from a public API on component render. Store the data in state, map over data and display users, style component
    - Constraints:
        - Show loading state.
        - Show error state.
 */

export const Api = () => {
  const { loading, data, error, setName, getData, name } = useFetchData();

  const debouncedValue = useDebounce(name, 3000);

  useEffect(() => {
    if (debouncedValue) {
      getData();
    }
  }, [getData, debouncedValue]);

  if (loading) {
    return <div>{"loading... " + loading}</div>;
  }

  if (error) {
    return <div></div>;
  }

  return (
    <>
      <div>{data}</div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="pokemon name here"
      />
      {/* <button onClick={getData}>fetch</button> */}
    </>
  );
};
