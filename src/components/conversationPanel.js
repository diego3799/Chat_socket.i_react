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
      socket.on("msg", (data, type) => {
        setMensajes({ data, type });
      });
    }
    // eslint-disable-next-line
  }, [socket]);
  useEffect(() => {
    if (mensajes) {
      console.log(mensajes);
      switch (mensajes.type) {
        case "msg":
          const remake=mensajes.data.split(":");
          setResponse([
            ...response,
            <li className="mt-2 text-right w-full max-w-sm ml-auto">
              <span className="italic font-semibold text-lg mr-1">{remake[0]}:</span>
              {remake[1]}
            </li>,
          ]);

          return;
        case "goodbye":
          setResponse([
            ...response,
            <li
              key={mensajes.data}
              className="text-center my-2 text-lg text-red-800 w-full bg-red-100"
            >
              {mensajes.data}
            </li>,
          ]);
          return;
        case "enter":
          setResponse([
            ...response,
            <li
              key={mensajes.data}
              className="text-center my-2 text-lg text-green-800 w-full bg-green-100"
            >
              {mensajes.data}
            </li>,
          ]);
          return;
        default:
          setResponse([
            ...response,
            <li key={mensajes.data}>{mensajes.data}</li>,
          ]);
          return;
      }
    }
    // eslint-disable-next-line
  }, [mensajes]);

  useEffect(() => {
    return () => {
      dispatch(closeSocketAction(user,room));
    };
    // eslint-disable-next-line
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("msg", user, texto,room);
    setResponse([
      ...response,
      <li className="mt-2 text-left w-full max-w-sm mr-auto">
        <span className="italic font-semibold text-lg mr-1">Me:</span>
        {texto}
      </li>,
    ]);
    setTexto("");
  };
  return (
    <div className="container shadow-md mx-auto flex flex-col max-h-full min-h-full  justify-between bg-white  max-w-full">
      <div className=" flex-auto overflow-auto ">
        <ul className="px-2">{response.map((item) => item)}</ul>
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
