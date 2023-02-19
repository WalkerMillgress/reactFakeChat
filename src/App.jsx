import React, { useState } from "react";
import "./App.css";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";

function App() {
  const [messages, setMessages] = useState([
    "Hola",
    "Adiós",
    "Te quiero",
    "Nabo",
  ]);

  const newMessageHandler = (message) => {
    console.log(message)
    setMessages((prevState) => {
      prevState.push(message)
      return prevState;
    });
    console.log(messages);
  };

  return (
      <div className="App">
        {messages.map((message) => (
          <ChatMessage message={message} />
        ))}
        <ChatInput fun={newMessageHandler} /> 
      </div>
  );
}

export default App;
