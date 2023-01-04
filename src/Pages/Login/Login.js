import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const {googleLogIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (event) => {
    setLoading(true);
    event.preventDefault();
    const email = event.target.email.value;
    fetch(`${process.env.REACT_APP_url}/user?email=${email}`)
    .then(res => res.json())
    .then(data => {
      if(data){
        navigate(`/loginPassword/${email}`);
        setLoading(false);
      }
      else {
         navigate(`/CreatePassword/${email}`);
         setLoading(false);
       }
    })
    .catch(err => console.log(err))
  };


  const handleGoogleLogin = () => {
    googleLogIn()
    .then(res => {
    })
    .catch(err => console.error(err));
  };

  return (
    <div className="w-[328px] h-screen mx-auto my-14">
      <div className="w-[102px]">
        <img src="https://auth.trivago.com/_static/icons/logo.svg" alt="" />
      </div>
      <h2 className="text-3xl font-bold mt-10 mb-2">
        Log in or create an account
      </h2>
      <div>
        <form 
        onSubmit={handleLogin}
        >
        <label htmlFor="">Your email address</label>
        <input
          className="p-2 border rounded-md w-full border-gray-400 my-2"
          required
          id="Your email address"
          name="email"
        />
        <button type="submit" className="block text-center w-full p-2 rounded-md bg-[#007cc2] font-bold text-white">
          {
            loading ? <div className="w-6 h-6 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div> : "Next"
          }
          </button>
        </form>
        <div className="flex items-center my-4">
            <p className="w-1/2 h-[1px] bg-gray-500"></p><span className="px-1 mb-1">OR</span><p className="w-1/2 h-[1px] bg-gray-500"></p>
        </div>
        <button onClick={handleGoogleLogin} className="w-full p-3 rounded-md border mt-3 border-gray-500 text-gray-700 flex items-center gap-14"><img className="w-6" src="https://auth.trivago.com/_static/icons/google.svg" alt="" /> Continue with Google</button>
        <button className="w-full p-3 rounded-md border mt-3 border-gray-500 text-gray-700 flex items-center gap-14"><img className="w-6" src="https://auth.trivago.com/_static/icons/apple.svg" alt="" /> Continue with Apple</button>
        <button className="w-full p-3 rounded-md border mt-3 border-gray-500 text-gray-700 flex items-center gap-14"><img className="w-6" src="https://auth.trivago.com/_static/icons/facebook.svg" alt="" /> Continue with Facebook</button>
        <p className="mt-2"><small>By creating an account, you agree to our <Link className="text-blue-500" to="https://trivago.com/en-IN/sp/privacy-policy">Privacy policy</Link> and <Link className="text-blue-500" to="https://trivago.com/en-IN/st/terms-of-service">Terms of use</Link>.</small></p>
      </div>
    </div>
  );
};

export default Register;
