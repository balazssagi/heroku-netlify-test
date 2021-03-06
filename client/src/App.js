import React from "react";
import "./App.css";

const API_URL = "https://obscure-taiga-06041.herokuapp.com/";

function App() {
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    fetch(API_URL).then(res =>
      res.text().then(text => {
        setText(text);
      })
    );
  });

  return (
    <div className="App">
      <header className="App-headea r">
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
