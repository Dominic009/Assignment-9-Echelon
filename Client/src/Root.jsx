import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

const Root = () => {
  return (
    <div>
      <div className="font-poppins">
        <Outlet></Outlet>
      </div>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
