import "./App.css";
import { Counter } from "./components/Easy/counter/Counter";
import { useEffect } from "react";
import { Api } from "./components/useEffect/Api";
import { LocalStorage } from "./components/useEffect/LocalStorage";
import { Example } from "./components/useEffect/Example";
import { useDebounce } from "./hooks/useDebounce";
import { useFetchData } from "./hooks/useFetchData";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const debouncedName = useDebounce(name, 500)
  const { data, getData } = useFetchData();

  useEffect(() => {
    if (debouncedName) {
      getData(debouncedName);
    }
  }, [debouncedName])

  return (
    <>
      <input placeholder="enter pokemon name"
      value={name} 
      onChange={(e) => setName(e.target.value)}/>
      {name && <p>Debounced: {debouncedName}</p>} 
    </>
  );
}

export default App;
