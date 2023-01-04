import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const LoginPassword = () => {
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false)
  const userMail = useLoaderData();
  const {logIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    logIn(userMail?.email, password)
    .then(res => {
      setError("");
      navigate('/')
    })
    .catch(err => {
      setError(err.message);
      console.error(err)
    });
  };


  return (
    <div className="w-[328px] h-screen mx-auto my-14">
      <div className="w-[102px]">
        <img src="https://auth.trivago.com/_static/icons/logo.svg" alt="" />
      </div>
      <Link to="/login" className="flex items-center gap-2 mt-10">
        <img
          className="w-[5px] h-[10px]"
          src="https://auth.trivago.com/_static/icons/chevron-left.svg"
          alt=""
        />
        <p>{userMail?.email}</p>
      </Link>
      <h2 className="text-3xl font-bold mb-2">Enter your password</h2>
      <div>
        <div className="flex justify-between">
          <label htmlFor="">
            <small>
              <strong>Password</strong>
            </small>
          </label>
          <div onClick={()=> setIsVisible(!isVisible)}>
          <img
            className="w-6"
            src="https://auth.trivago.com/_static/icons/eye-closed.svg"
            alt=""
          />
          </div>
        </div>

       <form
       onSubmit={handleLogin}
       >
       <input
       type={isVisible ? 'text' : 'password'}
          className="p-2 border rounded-md w-full border-gray-400 my-2"
          required
          id="Your email address"
          name="password"
          placeholder="Your Password"
        />
        <p className="my-2 text-red-500">{error}</p>
        <button
          type="submit"
          className="block text-center w-full p-2 mb-2 rounded-md bg-[#007cc2] font-bold text-white"
        >
          Log in
        </button>
       </form>
        <Link className=" underline text-blue-500">Forgot your password?</Link>
      </div>
    </div>
  );
};

export default LoginPassword;
