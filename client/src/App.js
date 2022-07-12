import './App.css';
import io from 'socket.io-client';
import {useEffect, useState} from 'react';

import {Content, Joinroom} from './components';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Intro from "./pages/Intro";

const socket = io.connect("http://localhost:3001");

function App() {
  const [room, setRoom] = useState("");

  const [shashu, setShashu] = useState("");
  const [shashuReceived, setShashuReceived] = useState("")

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendShashu = () => {
    socket.emit("send_shashu", { shashu, room });
  };

  useEffect(() => {
    socket.on("receive_shashu", (data) => {
      setShashuReceived(data.shashu);
    });
  }, [socket]);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />}/>
        <Route path="/game" element={<Game />} />
      </Routes>
      </BrowserRouter>

      <input
        placeholder="enter room mumber..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}>Join Room</button>

      <input placeholder='number of shashu....' onChange={(event) => {
        setShashu(event.target.value);
      }}/>
      <button onClick={sendShashu}>Send shashu</button>
      <h1>Shashu:</h1>
      {shashuReceived}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;


