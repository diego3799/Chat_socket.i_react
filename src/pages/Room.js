import React, { useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initSocketAction } from "../actions/socketActions";
import ConversationPanel from "../components/conversationPanel";
// let socket;
const Room = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initSocketAction("https://socketio-server.vercel.app"));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="min-h-screen w-full ">
      <div className="bg-green-500 shadow-md h-auto">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="text-white text-xl font-semibold md:text-3xl md:font-light ">
            Welcome to Room {id}
          </h1>
          <button
            onClick={() => history.push("/")}
            className="focus:outline-none  inline-block px-4 py-3 rounded text-white uppercase font-bold bg-btnColor hover:bg-teal-800"
          >
            Go Home !
          </button>
        </div>
      </div>
      <div
        className="min-w-full  absolute "
        style={{
          top: 80,
          left: 0,
          bottom: 0,
          backgroundColor:"#E9EDDE"
        }}
      >
        <ConversationPanel />
      </div>
    </div>
  );
};

export default Room;
