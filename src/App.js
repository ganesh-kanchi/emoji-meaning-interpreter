import React, { useState } from "react";
import "./styles.css";

const emojiDirectory = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😴": "Sleeping Face",
  "🤓": "Nerd Face",
  "😭": "Loudly crying Face",
  "🥱": "Yawning Face",
  "👽": "Alien"
};

const emojis = Object.keys(emojiDirectory);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("Meaning will appear below");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDirectory) {
      setMeaning(emojiDirectory[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDirectory[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji's Meaning Interpreter</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          minWidth: "75%",
          padding: "0.5rem 1rem 1rem 0.5rem"
        }}
      />
      <h2> {emoji} </h2> {}
      <h3> {meaning} </h3> {}
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{
            fontSize: "2rem",
            padding: "0.5rem",
            cursor: "pointer",
            paddingTop: "1rem"
          }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
