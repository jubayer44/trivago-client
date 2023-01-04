import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const CreatePassword = () => {
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false)
  const {signUp} = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const email = location.pathname.split('/')[2];

  const handleSignUp = (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    signUp(email, password)
    .then(res => {
      fetch(`http://localhost:5000/addEmail`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email
        }),
      })
      .then(res => res.json())
    .then(data => {
      if(data?.acknowledged){
        setError('');
      navigate('/');
      }
       
    })
    .catch(err => console.log(err))
    })
    .catch(err => {
      setError(err.message);
      console.error(err.message)
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
        <p>{email}</p>
      </Link>
      <h2 className="text-3xl font-bold mb-2">
        Create a password for your new account
      </h2>
      <div>
        <form onSubmit={handleSignUp}>
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
          <input
          type={isVisible ? 'text' : 'password'}
            className="p-2 border rounded-md w-full border-gray-400 my-2"
            required
            id="Your email address"
            name="password"
            placeholder="enter your password"
          />
          <p className="my-2 text-red-500">{error}</p>
          <button
            type="submit"
            className="block text-center w-full p-2 rounded-md bg-[#007cc2] font-bold text-white"
          >
            Create account
          </button>
        </form>
        <p className="my-2">Your password should have at least:</p>
        <ul>
          <li className="flex justify-between">
            <p>
              <small className="text-gray-500">10 characters</small>
            </p>
            <p>0/10</p>
          </li>
          <li className="flex justify-between">
            <p>
              <small className="text-gray-500">1 uppercase letter</small>
            </p>
            <p>0/1</p>
          </li>
          <li></li>
        </ul>
        <p className="mt-2">
          <small>
            By creating an account, you agree to our{" "}
            <Link
              className="text-blue-500"
              to="https://trivago.com/en-IN/sp/privacy-policy"
            >
              Privacy policy
            </Link>{" "}
            and{" "}
            <Link
              className="text-blue-500"
              to="https://trivago.com/en-IN/st/terms-of-service"
            >
              Terms of use
            </Link>
            .
          </small>
        </p>
      </div>
    </div>
  );
};

export default CreatePassword;
