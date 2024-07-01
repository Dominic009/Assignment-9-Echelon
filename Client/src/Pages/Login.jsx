import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "animate.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userLogIn, googleLogin, githubLogin } =
    useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

    userLogIn(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/home");
      })
      .catch((error) => {
        if (error) {
          toast.error("Please check your credentials");
        }
      });
  };

  const handleGoogleLogIn = () => {
    googleLogin()
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  const handleGithubLogIn = () => {
    githubLogin()
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="font-poppins">
      <Helmet>
        <title>Login</title>
      </Helmet>
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
          <h1 className="animate__animated animate__fadeInDown text-3xl md:text-5xl  font-bold">
            Login now!
          </h1>
        </div>
        <div className="card shrink-0 shadow-2xl bg-base-100 md:w-[50%] mx-auto">
          <form onSubmit={handleLogIn} className="card-body">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 w-[70%] mx-auto">
              <button className="btn bg-[#14213D] text-[#FCA311] text-lg">
                Login
              </button>
            </div>
          </form>
          <hr className="w-[70%] mx-auto mb-5" />
          <div className="flex flex-col md:flex-row justify-center md:gap-5">
            <div className="text-center mb-5">
              <button onClick={handleGoogleLogIn} className="btn ">
                <FcGoogle className="text-xl" />
                Login with Google
              </button>
            </div>
            <div className="text-center mb-5">
              <button onClick={handleGithubLogIn} className="btn ">
                <FaGithub className="text-xl" />
                Login with Github
              </button>
            </div>
          </div>
        </div>
        <div className="mt-7 text-center md:text-lg text-sm">
          <p>
            Dont have an account?{" "}
            <Link
              to="/register"
              className="text-[#FCA311] underline underline-offset-2 font-semibold"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
      {/* ------------- */}
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
