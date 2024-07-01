import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="w-full font-poppins">
      <div
        className="hero min-h-screen"
        style={{
            backgroundImage:
            "url(https://images.pexels.com/photos/6758771/pexels-photo-6758771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <Link to="/home" className="btn bg-[#14213D] text-white border-none absolute top-5 right-5">
          Visit Site
        </Link>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content flex-col w-[60%]">
          <div className="w-full">
            <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
            <p className="mb-5 w-full">
              Welcome to the world of luxury and where your needs get the pleasure to be pleased by the surroundings. If you are looking for a place to rest your mind and soul and be present in your own world, here is the place to be.
            </p>
          </div>
          <div className="flex justify-evenly md:flex-row flex-col items-center gap-4">
            <div>
              <Link to="/login" className="btn bg-[#14213D] text-[#FCA311] hover:bg-[#14213dd2] px-16">
                Login
              </Link>
            </div>
            <span>Or</span>
            <div>
              <Link to="/register" className="btn bg-[#14213D] text-[#FCA311] hover:bg-[#14213dd2] px-16">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
