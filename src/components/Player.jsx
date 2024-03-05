import { useState, useRef } from "react";

export default function Player() {
  const name = useRef();
  const [playerName, setPlayerName] = useState("unknown entity");

  function handleChange() {
    setPlayerName(name.current.value);
    name.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={name} type="text" />
        <button onClick={handleChange}>Set Name</button>
      </p>
    </section>
  );
}
