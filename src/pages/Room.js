import React, { useState, useEffect } from "react";
import socketIO from "socket.io-client";
import { useParams } from "react-router-dom";
let socket;
const Room = () => {
  const [texto, setTexto] = useState("");
  const { id } = useParams();
  // const [socket, loading] = useSocket("http://localhost:5000");
  const [mensajes, setMensajes] = useState();
  const [response, setResponse] = useState([]);
  useEffect(() => {
    console.log(id);
    socket = socketIO("http://localhost:5000");
    socket.on("msg", (data) => {
      //  console.log(data);
      setMensajes(data);
    });
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (mensajes) {
      setResponse([...response, mensajes]);
    }
    // eslint-disable-next-line
  }, [mensajes]);
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("msg", texto);
    setTexto("");
  };
  return (
    <div className="min-h-screen w-full border-4 border-red-500">
      <div className="bg-green-500 shadow-md">
        <div className="max-w-screen-lg mx-auto py-4 flex justify-between">
          <h1 className="text-white text-3xl font-light">
            Welcome to Room {id}
          </h1>
          <button
            // style={{
            //   backgroundColor: "#006D7C",
            // }}
            className="focus:outline-none inline-block px-4 py-3 rounded text-white uppercase font-bold bg-btnColor hover:bg-teal-800"
          >
            Go Home !
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <h1>Area par esciribir cosas</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {response.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Escribir texto"
          name="Meter"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Room;
