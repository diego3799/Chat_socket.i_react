import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUserAction, addRoomIdAction } from "../actions/sessionActions";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.session);
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = ({ id, nickname }) => {
    if (id.trim() === "" || nickname.trim() === "") {
      setError("Nickanme and Room ID must be provided");
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }
    dispatch(addUserAction(nickname));
    dispatch(addRoomIdAction(id));

    history.push(`/room/${id}`);
  };
  const showError = () => {
    return <div className="bg-white max-w-sm w-full px-4 py-3 my-3 text-center" >{error}</div>;
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-500">
        {error && showError()}
      <div className="bg-white shadow-md rounded w-full max-w-sm px-4 py-3">
        <h1 className="text-center text-2xl  ">Enter a Room! </h1>
        <form
          className="flex flex-col px-2 py-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              htmlFor="nickname"
              className="block text-sm text-gray-700 font-bold mb-2"
            >
              Nickname
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full appearance-none leading-normal shadow-md font-light"
              type="text"
              id="nickname"
              name="nickname"
              defaultValue={user}
              ref={register}
              placeholder="Enter nickanme"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="id"
              className="block text-sm text-gray-700 font-bold mb-2"
            >
              Room Id
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full appearance-none leading-normal shadow-md font-light"
              type="text"
              id="id"
              placeholder="#247Ebhs7"
              name="id"
              ref={register}
            />
          </div>

          <input
            className="bg-btnColor hover:bg-teal-800 text-white font-bold uppercase rounded  py-2  leading-normal shadow-sm"
            type="submit"
            value="Enter Room !"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
