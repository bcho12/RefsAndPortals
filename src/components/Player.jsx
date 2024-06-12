import { useState, useRef } from "react";

export default function Player() {
  // Can connect to html elements
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  // enteredPlayerName ? enteredPlayerName : 'Unknown entity'
  // enteredPlayerName ?? 'Unknown entity'
  // The 2 above are the same
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'Unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
