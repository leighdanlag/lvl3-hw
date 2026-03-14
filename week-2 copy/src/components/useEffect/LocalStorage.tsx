import { useState, useEffect } from "react";

/**
 * Goal: Sync state with external storage.
    - Task: A text input “username”. Load initial value from localStorage on mount, and save to localStorage whenever it changes.
    - Constraints:
        - Don’t overwrite storage with empty before loading.
        - Handle missing storage value.
 */

export const LocalStorage = () => {
  const [username, setUsername] = useState(() => localStorage.getItem("username"));

  useEffect(() => {
    localStorage.setItem("username", username || "");
  }, [username]);

  useEffect(() => {
    (async () => {
      const name = await localStorage.getItem("username");
      setUsername(name);
    })();
  }, []);

  return (
    <div>
      {username}
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="set user name"
      />
    </div>
  );
};
