import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../components/contex";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const onSubmit = ({ id, nickname }) => {
    setUser(nickname);
    history.push(`/room/${id}`);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-500">
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
