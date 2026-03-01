import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import hide from "./assets/hide.png";
import show from "./assets/show.png";

function App() {
  const [count, setCount] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [paragraphVisible, setParagraphVisible] = useState(true);
  const [text, setText] = useState<string>("");
  const [passVisible, setPassVisible] = useState(true);

  return (
    <div className="flex w-screen h-screen">
      {/* Sidebar + button */}
      {sidebarVisible && <Sidebar />}
      <div className="relative flex flex-1 flex-col w-full gap-2 pt-7 justify-items-center items-center bg-blue-200">
        <button
          className="absolute top-5 left-5"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          {sidebarVisible ? "Hide" : "Show"}
        </button>

        {/* count */}
        <div className="flex flex-col gap-2 justify-center items-center rounded-xl w-150 h-50 bg-black">
          <p>Count is {count}</p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                if (count !== 0) {
                  setCount(count - 1);
                }
              }}
            >
              -
            </button>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>

        {/* Show/Hide Text */}
        <div
          className={`relative flex flex-col gap-2 justify-center items-center rounded-xl w-150 bg-black p-5 transition-all overflow-hidden duration-300
          ${paragraphVisible ? "h-70" : "h-50"}`}
        >
          {paragraphVisible && (
            <p className="text-center">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          )}
          <button
            className="absolute bottom-3 right-5"
            onClick={() => setParagraphVisible(!paragraphVisible)}
          >
            {paragraphVisible ? "Hide" : "Show"}
          </button>
        </div>

        {/* Form input display */}
        <div className="flex flex-col gap-2 justify-items-center items-center rounded-xl w-150 min-h-50 bg-black p-5">
          <textarea 
            value={text}
            placeholder="Input text here"
            className="bg-white text-black border p-2 rounded w-100 h-20 resize-none"
            onChange={(e) => setText(e.target.value)}
          />

          <div className="bg-gray-800 rounded-xl p-5 w-100 max-h-50 overflow-y-auto transition-all duration-300">
            <p className="text-white break-words whitespace-pre-wrap text-center">{text}</p>
          </div>

        </div>

        {/* Password show/hide */}
        <div className="flex gap-2 justify-center items-center rounded-xl w-150 min-h-50 bg-black p-5">
          <input className="w-100 p-3 bg-white text-black rounded-xl"
            placeholder="Password"
            type={passVisible ? "text" : "password"}
          />
          <button
            onClick={() => setPassVisible(!passVisible)}
            className="!bg-white !rounded-xl !h-11"
          >
            {passVisible ? <img src={show}/> : <img src={hide} />}
          </button>

        </div>

      </div>
    </div>
  );
}

export default App;
