import { Helmet } from "react-helmet-async";
import Error from "../assets/404.jpg";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Oopss!</title>
      </Helmet>

      <div className="flex justify-center bg-[#FEA918]">
        <Link to="/home" className="btn absolute top-5 right-5">
          Home
        </Link>
        <img src={Error} className="h-[100vh]" />
      </div>
    </div>
  );
};

export default NotFound;
