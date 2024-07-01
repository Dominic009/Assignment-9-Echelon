import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "animate.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { createUser, loading } = useContext(AuthContext);

    //loader
    if(loading){
      return <span className="loading loading-bars bg-transparent flex justify-center items-center h-[100vh] w-[5%] mx-auto"></span>
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("displayName");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    const conPass = form.get("confirmPassword");

    console.log(email, password, name, photo);

    
    if (password.length < 6) {
      return(toast.error("Password needs to be at least 6 charaters"))
    }
    else if (!/([A-Z])/.test(password)) {
    ( toast.error("Password needs at least one uppercase letter"))
      return; 
      
    }
    else if (!/([a-z])/.test(password)) {
      toast.error("Password needs at least one lowercase letter");
      return; 
      
    }
    else if (error) {
      toast.error(error);
      return; 
      
    }
    else if(password !== conPass){
      toast.error("Password does not match")
      return; 
      
    }
    createUser(email, password)
      .then((res) => {
        toast.success("Registration Completed!")
        console.log(res.user);
        navigate("/login");

        //Update
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((error) => setError(error.message));
  };

  const pass = (`Minimum charaters 6
      You need at least one Uppercase letter
      You need at least one Lowercase letter`);

  return (
    <div className="font-poppins">
      <div>
        <Helmet>
          <title>Register</title>
        </Helmet>
        <Toaster></Toaster>
        <div className="flex justify-between items-center p-4">
          <div className="w-[40%] md:w-[20%]">
            <img src={Logo} />
          </div>
          <div>
            <Link to="/home" className="btn">
              Home
            </Link>
          </div>
        </div>

        {/* ----------------- */}
        <div className="min-h-screen bg-base-200 p-5">
          <div className="text-center mb-12 mt-12">
            <h1 className="animate__animated animate__fadeInDown text-3xl md:text-5xl font-bold">
              Register now!
            </h1>
          </div>
          <div className="card shrink-0 shadow-2xl bg-base-100 md:w-[50%] mx-auto">
            <form onSubmit={handleSubmit} className="card-body">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="displayName"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Photo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
              {/* Password */}
              <div title={pass} className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="form-control relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                  <div
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-4 cursor-pointer text-xl text-gray-400"
                  >
                    {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                  </div>
                </div>
              </div>
              {/* Confirm Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <div className="form-control relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="input input-bordered"
                    required
                  />
                  <div
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-4 cursor-pointer text-xl text-gray-400"
                  >
                    {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                  </div>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 w-[70%] mx-auto">
                <button className="btn bg-[#14213D] text-[#FCA311] text-lg">
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="mt-7 text-center md:text-lg text-sm">
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#FCA311] underline underline-offset-2 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        {/* ------------- */}
      </div>
    </div>
  );
};

export default Register;
