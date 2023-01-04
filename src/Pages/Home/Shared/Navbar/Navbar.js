import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
      })
      .catch((err) => console.error(err));
  };



  return (
    <nav className=" w-full bg-white border-b">
      <div className="justify-between mx-auto md:items-center md:flex max-w-[1280px] mr-0">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex gap-2 items-center">
              <div className="items-center justify-center space-y-8 md:space-x-10 md:space-y-0 px-3 md:hidden">
                <svg width="102" height="32" viewBox="0 0 102 32">
                  <path
                    d="M33.706 6.989h5.441l4.133 11.149h.066l3.83-11.149h5.071L45.8 23.377h-5.34"
                    fill="#FC9E15"
                  ></path>
                  <path
                    d="M13.971 11.018H9V16.5c0 .93.082 2.119.959 2.655a4.649 4.649 0 002.9.283 2.242 2.242 0 001.107-.386v4.2a10.114 10.114 0 01-1.938.4c-3.556.359-8.54-.253-8.54-4.838v-7.8H0V6.988h3.492V2.153H9v4.836h4.97v4.03zm14.1-4.03h4.97v16.389h-4.97V6.989zm-.2-4.311a2.676 2.676 0 115.351 0 2.677 2.677 0 01-5.353 0"
                    fill="#1391D2"
                  ></path>
                  <path
                    d="M90.124 15.195c0 2.215 1.289 4.13 3.648 4.13s3.647-1.915 3.647-4.131-1.287-4.133-3.647-4.133-3.647 1.917-3.648 4.134m-4.556 0a8.224 8.224 0 0114.711-5.43 9.491 9.491 0 01.687 9.766 8.214 8.214 0 01-15.4-4.336M80.24 6.973v2.2h-.076a3.041 3.041 0 00-.574-.613c-3.254-2.8-8.812-2.238-10.915 1.679a11.506 11.506 0 00-.924 6.812c.283 2.077 1.05 4.275 2.879 5.478a7.739 7.739 0 006.936.71 4.8 4.8 0 002.075-1.572h.059v1.588a3.9 3.9 0 01-.984 2.881c-1.449 1.493-4.218 1.4-6.079.894a9.223 9.223 0 01-2.914-1.307l-2.451 3.6a11.307 11.307 0 003.906 1.9c3.583.949 8.543.928 11.312-1.921 1.561-1.606 2.2-3.96 2.2-7.06V6.971h-4.448zM78.984 18.2a3.707 3.707 0 01-5.4 0 5.013 5.013 0 010-6 3.707 3.707 0 015.4 0 5.011 5.011 0 010 6c-.639.763.641-.763 0 0z"
                    fill="#E3403D"
                  ></path>
                  <path
                    d="M15.314 6.989h5.105v2.686h.051A5.715 5.715 0 0122.384 7.4a6.338 6.338 0 014.482-.6v4.6c-1.029-.278-3.2-.715-4.717.211-.96.586-1.731 1.288-1.731 4.929v6.839h-5.105V6.989z"
                    fill="#1391D2"
                  ></path>
                  <path
                    d="M56.992 16.844c-1 .62-1.683 1.829-.763 2.775.9.922 2.522.829 3.632.441a2.98 2.98 0 002.2-2.784v-1.018c.017 0-3.794-.208-5.069.585zm5.07 4.518h-.093a5.079 5.079 0 01-2.232 1.852c-3.563 1.464-8.748-.019-8.75-4.492 0-4.655 5.07-5.606 8.784-5.712a89.25 89.25 0 012.267-.034 2.62 2.62 0 00-.957-2.132 4.243 4.243 0 00-4.535-.268A6.2 6.2 0 0054.716 12l-2.688-2.752a9.255 9.255 0 013.292-1.966 11.844 11.844 0 017.044-.27 5.625 5.625 0 013.952 4.437 17.479 17.479 0 01.314 3.61v8.317h-4.567v-2.014z"
                    fill="#FC9E15"
                  ></path>
                </svg>
              </div>
              <div className="hidden md:block">
                <ul className="items-center justify-center space-y-8 flex md:space-x-10 md:space-y-0 px-3">
                  <li className="text-gray-600 hover:text-blue-600 flex gap-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="pointer-events-none max-h-full max-w-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 12a3.1 3.1 0 00-1-2.31V6a1 1 0 00-1-1H5a1 1 0 00-1 1v3.69A3.1 3.1 0 003 12a1 1 0 00-1 1v4a2 2 0 002 2h16a2 2 0 002-2v-4a1 1 0 00-1-1zm-7.76-1a1.72 1.72 0 011.51-1h3.5a1.5 1.5 0 01.75.2 1.87 1.87 0 01.91 1.21A1.87 1.87 0 0120 12h-7a2.2 2.2 0 01.24-1zM5 6h14v3.12a2.36 2.36 0 00-.75-.12h-3.5a2.78 2.78 0 00-2.59 2 3.27 3.27 0 00-.16 1 3.27 3.27 0 00-.16-1 2.78 2.78 0 00-2.59-2h-3.5a2.36 2.36 0 00-.75.12zm-.91 5.41A1.87 1.87 0 015 10.2a1.5 1.5 0 01.75-.2h3.5a1.72 1.72 0 011.51 1 2.2 2.2 0 01.24 1H4a1.87 1.87 0 01.09-.59zM21 17a1 1 0 01-1 1H4a1 1 0 01-1-1v-4h18z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <Link to="/">Stays</Link>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600 flex gap-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="pointer-events-none max-h-full max-w-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <path d="M19 11a.93.93 0 00-.06-.37l-1.76-4.37A2 2 0 0015.32 5H8.68a2 2 0 00-1.86 1.26l-1.75 4.37A.93.93 0 005 11a2 2 0 00-2 2v3a2 2 0 002 2v1a1 1 0 001 1h2a1 1 0 001-1v-1h6v1a1 1 0 001 1h2a1 1 0 001-1v-1a2 2 0 002-2v-3a2 2 0 00-2-2zM7.75 6.63A1 1 0 018.68 6h6.64a1 1 0 01.93.63L18 11H6zM8 19H6v-1h2zm10 0h-2v-1h2zm2-3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3a1 1 0 011-1h14a1 1 0 011 1z"></path>
                        <circle cx="7" cy="14" r="1"></circle>
                        <circle cx="17" cy="14" r="1"></circle>
                      </g>
                    </svg>
                    <Link to="/">Cars</Link>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600 flex gap-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="pointer-events-none max-h-full max-w-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.39 12.08L14 9.3V5c0-.64-.5-3-2-3s-2 2.36-2 3v4.3l-6.39 2.78A1 1 0 003 13v1a1 1 0 00.34.76A1.07 1.07 0 004 15h.14l5.86-.87v2.34l-2.55 1.7A1 1 0 007 19v1a1 1 0 00.47.85A1 1 0 008 21a1 1 0 00.45-.11L12 19.12l3.55 1.77A1 1 0 0016 21a1 1 0 00.53-.15A1 1 0 0017 20v-1a1 1 0 00-.45-.83L14 16.47v-2.34l5.86.86H20a1.07 1.07 0 00.66-.24A1 1 0 0021 14v-1a1 1 0 00-.61-.92zM20 14l-7-1v4l3 2v1l-4-2-4 2v-1l3-2v-4l-7 1v-1l7-3V5c0-.55.45-2 1-2s1 1.45 1 2v5l7 3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <Link to="/">Flights</Link>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600 flex gap-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="pointer-events-none max-h-full max-w-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6h-3v-.67A2.16 2.16 0 0015 3H9a2.16 2.16 0 00-2 2.33V6H4a1.9 1.9 0 00-2 1.76v11.48A1.9 1.9 0 004 21h16a1.9 1.9 0 002-1.76V7.76A1.9 1.9 0 0020 6zM8 5.33C8 4.6 8.45 4 9 4h6c.55 0 1 .6 1 1.33V6H8zM4 20c-.54 0-1-.35-1-.76V7.76C3 7.35 3.46 7 4 7h1v13zm2 0V7h12v13zm15-.76c0 .41-.46.76-1 .76h-1V7h1c.54 0 1 .35 1 .76z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <Link to="/">Packages</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-10 md:space-y-0 px-3">
              <li className="text-gray-600 hover:text-blue-600 flex gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="pointer-events-none max-h-full max-w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.42 4.82A5.23 5.23 0 0016.5 3 5.37 5.37 0 0012 5.58 5.37 5.37 0 007.5 3a5.23 5.23 0 00-3.92 1.82A6.35 6.35 0 002 9.07v.28c0 5.42 7.25 10.18 9.47 11.51a1 1 0 001 0C14.74 19.53 22 14.77 22 9.35v-.22-.06a6.35 6.35 0 00-1.58-4.25zM21 9.18v.17c0 4.94-7.07 9.5-9 10.65-1.92-1.15-9-5.71-9-10.65v-.17a.41.41 0 000-.11A4.81 4.81 0 017.5 4a4.39 4.39 0 013.66 2.12L12 7.44l.84-1.32A4.39 4.39 0 0116.5 4 4.81 4.81 0 0121 9.07a.41.41 0 000 .11z"
                    fill="currentColor"
                  ></path>
                </svg>
                <Link to="/">My Favourites</Link>
              </li>
              {
                !user?.email && 
                <li className="text-gray-600 hover:text-blue-600 flex gap-1">
                <Link to="/login">Log in </Link>
              </li>
              }
              <li className="text-gray-600 hover:text-blue-600 flex gap-1 peer">
                {
                  user?.email && <svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><circle fill="#F9C77F" cx="12" cy="12" r="12"></circle><path d="M14.223 14.324H9.5c-.126 0-.227.101-.202.228.126 1.111 1.238 2.248 2.577 2.248s2.45-1.137 2.577-2.248a.226.226 0 00-.228-.228z" fill="#37454D"></path><g transform="translate(4.042 9.347)" fill="#37454D"><circle cx="14.425" cy="1.238" r="1.061"></circle><circle cx="1.213" cy="1.314" r="1.061"></circle></g></g></svg>
                }
                <Link
                  to="/"
                >
                  Menu
                </Link>
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </li>
              <div  className="hidden absolute peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg top-10 right-1"
                >
                  {
                    user?.email && <Link className="px-5 py-3 hover:bg-gray-200 border" to="/">
                    Account settings
                  </Link>
                  }
                  <Link className="px-5 py-3 hover:bg-gray-200 border" to="/">
                    Recently viewed
                  </Link>
                  <Link className="px-5 py-3 hover:bg-gray-200 border" to="/">
                    Help and support
                  </Link>
                  {
                    user?.email && <Link onClick={handleLogout} to="/" className="px-5 py-3 hover:bg-gray-200 border">
                    Log out
                  </Link>
                  }
                </div>
              <li className="text-gray-600 hover:text-blue-600 flex gap-1">
                <Link to="/">INR</Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:hidden">
                <ul className="items-center gap-10 flex md:space-x-10 md:space-y-0 px-3 border-t py-4">
                  <li className="text-gray-600 hover:text-blue-600 flex gap-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="pointer-events-none max-h-full max-w-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 12a3.1 3.1 0 00-1-2.31V6a1 1 0 00-1-1H5a1 1 0 00-1 1v3.69A3.1 3.1 0 003 12a1 1 0 00-1 1v4a2 2 0 002 2h16a2 2 0 002-2v-4a1 1 0 00-1-1zm-7.76-1a1.72 1.72 0 011.51-1h3.5a1.5 1.5 0 01.75.2 1.87 1.87 0 01.91 1.21A1.87 1.87 0 0120 12h-7a2.2 2.2 0 01.24-1zM5 6h14v3.12a2.36 2.36 0 00-.75-.12h-3.5a2.78 2.78 0 00-2.59 2 3.27 3.27 0 00-.16 1 3.27 3.27 0 00-.16-1 2.78 2.78 0 00-2.59-2h-3.5a2.36 2.36 0 00-.75.12zm-.91 5.41A1.87 1.87 0 015 10.2a1.5 1.5 0 01.75-.2h3.5a1.72 1.72 0 011.51 1 2.2 2.2 0 01.24 1H4a1.87 1.87 0 01.09-.59zM21 17a1 1 0 01-1 1H4a1 1 0 01-1-1v-4h18z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <Link to="/">Stays</Link>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600 flex gap-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="pointer-events-none max-h-full max-w-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <path d="M19 11a.93.93 0 00-.06-.37l-1.76-4.37A2 2 0 0015.32 5H8.68a2 2 0 00-1.86 1.26l-1.75 4.37A.93.93 0 005 11a2 2 0 00-2 2v3a2 2 0 002 2v1a1 1 0 001 1h2a1 1 0 001-1v-1h6v1a1 1 0 001 1h2a1 1 0 001-1v-1a2 2 0 002-2v-3a2 2 0 00-2-2zM7.75 6.63A1 1 0 018.68 6h6.64a1 1 0 01.93.63L18 11H6zM8 19H6v-1h2zm10 0h-2v-1h2zm2-3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3a1 1 0 011-1h14a1 1 0 011 1z"></path>
                        <circle cx="7" cy="14" r="1"></circle>
                        <circle cx="17" cy="14" r="1"></circle>
                      </g>
                    </svg>
                    <Link to="/">Cars</Link>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600 flex gap-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="pointer-events-none max-h-full max-w-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.39 12.08L14 9.3V5c0-.64-.5-3-2-3s-2 2.36-2 3v4.3l-6.39 2.78A1 1 0 003 13v1a1 1 0 00.34.76A1.07 1.07 0 004 15h.14l5.86-.87v2.34l-2.55 1.7A1 1 0 007 19v1a1 1 0 00.47.85A1 1 0 008 21a1 1 0 00.45-.11L12 19.12l3.55 1.77A1 1 0 0016 21a1 1 0 00.53-.15A1 1 0 0017 20v-1a1 1 0 00-.45-.83L14 16.47v-2.34l5.86.86H20a1.07 1.07 0 00.66-.24A1 1 0 0021 14v-1a1 1 0 00-.61-.92zM20 14l-7-1v4l3 2v1l-4-2-4 2v-1l3-2v-4l-7 1v-1l7-3V5c0-.55.45-2 1-2s1 1.45 1 2v5l7 3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <Link to="/">Flights</Link>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600 flex gap-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="pointer-events-none max-h-full max-w-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6h-3v-.67A2.16 2.16 0 0015 3H9a2.16 2.16 0 00-2 2.33V6H4a1.9 1.9 0 00-2 1.76v11.48A1.9 1.9 0 004 21h16a1.9 1.9 0 002-1.76V7.76A1.9 1.9 0 0020 6zM8 5.33C8 4.6 8.45 4 9 4h6c.55 0 1 .6 1 1.33V6H8zM4 20c-.54 0-1-.35-1-.76V7.76C3 7.35 3.46 7 4 7h1v13zm2 0V7h12v13zm15-.76c0 .41-.46.76-1 .76h-1V7h1c.54 0 1 .35 1 .76z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <Link to="/">Packages</Link>
                  </li>
                </ul>
              </div>
    </nav>
  );
};

export default Navbar;
