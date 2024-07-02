import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import "animate.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <div className="list-none flex flex-col md:flex-row gap-6">
      <li className="hover:scale-105 hover:drop-shadow-lg">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 bg-[#14213D] p-2 rounded-lg"
              : "text-gray-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:scale-105 hover:drop-shadow-lg">
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 bg-[#14213D] p-2 rounded-lg"
              : "text-gray-500"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li className="hover:scale-105 hover:drop-shadow-lg">
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 bg-[#14213D] p-2 rounded-lg"
              : "text-gray-500"
          }
        >
          About Us
        </NavLink>
      </li>

      {user ? (
        <>
          <li className="hover:scale-105 hover:drop-shadow-lg">
            <NavLink
              to="/updateProfile"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 bg-[#14213D] p-2 rounded-lg"
                  : "text-gray-500"
              }
            >
              Update Profile
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </div>
  );

  return (
    <div className="bg-gray-50 bg-opacity-25 backdrop-blur-xl px-2">
      <div className="navbar py-5 h-[100px] gap-5 justify-between">
        <div className="max-w-72">
          <div className="dropdown z-20">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-xl dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-[300px]"

            >
              {navLinks}
            </ul>
          </div>
          <Link to="/home">
            <img
              src={logo}
              className="animate__animated animate__slideInLeft"
            />
          </Link>
        </div>

        <div className="md:w-[50%] lg:w-[80%] mx-auto flex justify-center">
          {navLinks}
        </div>

        <div className="md:scale-100 flex justify-end gap-5 w-[20%]">
          <div className="w-[15%]">
            {user ? (
              <div>
                <Link to="/userprofile">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      title={user.displayName}
                      className="rounded-full"
                    />
                  ) : (
                    <p className="text-lg font-bold mr-24 w-full border rounded-lg bg-current flex items-center justify-center">
                      <span className="text-white">{user.displayName}</span>
                    </p>
                  )}
                </Link>
              </div>
            ) : ""}
          </div>
          <div className="flex justify-end">
            {user ? (
              <button
                onClick={handleLogOut}
                className="hover:bg-[#14213D] hover:text-white border border-[#14213D] px-6 py-2 rounded-lg active:scale-95 shadow-lg"
              >
                Log out
              </button>
            ) : (
              <Link
                to="/login"
                className="hover:bg-[#14213D] hover:text-white border border-[#14213D] px-6 py-2 rounded-lg active:scale-95 shadow-lg"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Navbar;
