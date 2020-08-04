import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeSocketAction } from "../actions/socketActions";

const ConversationPanel = () => {
  const [texto, setTexto] = useState("");
  const [response, setResponse] = useState([]);
  const dispatch = useDispatch();
  const {
    socket: { socket },
    session: { room, user },
  } = useSelector((state) => state);
  const [mensajes, setMensajes] = useState();
  useEffect(() => {
    if (Object.keys(socket).length > 0) {
      socket.emit("join-room", room, user);
      socket.on("msg", (data) => {
        setMensajes(data);
      });
    }
    // eslint-disable-next-line
  }, [socket]);
  useEffect(() => {
    if (mensajes) {
      setResponse([...response, mensajes]);
    }
    // eslint-disable-next-line
  }, [mensajes]);

  useEffect(() => {
    return () => {
      dispatch(closeSocketAction(user));
    };
    // eslint-disable-next-line
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("msg",user ,texto);
    setTexto("");
  };
  return (
    <div className="container shadow-md mx-auto flex flex-col min-h-full  justify-between bg-white ">
      <div className=" flex-auto">
        <ul>
          {response.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit} className="flex ">
        <input
          className="w-full focus:outline-none  border border-gray-400 py-2 px-4 appearance-none leading-normal font-normal"
          type="text"
          placeholder="Escribir texto"
          name="Meter"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <input
          className="py-2 px-4 bg-btnColor text-white font-bold uppercase"
          type="submit"
        />
      </form>
    </div>
  );
};

export default ConversationPanel;
