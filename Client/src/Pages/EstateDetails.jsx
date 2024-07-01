import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import { useLoaderData, useParams } from "react-router-dom";
import "animate.css";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";


const EstateDetails = () => {

  const load = useLoaderData();

  const { id } = useParams();

  const data = load.find((data) => data.id == id);

  const {
    estate_title,
    description,
    location,
    facilities,
    image,
    status,
    price,
    area,
  } = data;

  return (
    <div>
      <Helmet>
        <title>{estate_title}</title>
      </Helmet>
      <div className="sticky top-0 z-10 drop-shadow-xl backdrop-blur-xl">
        <Navbar></Navbar>
      </div>
      <div className=" mt-12 mb-12 w-[90%] mx-auto">
        <div className="p-2">
          <div className="card">
            <figure className="relative">
              <img src={image} className="w-full" />

              <p className="animate__fadeInLeft animate__animated flex items-center absolute left-0 bottom-0 md:h-14 md:w-[30%] bg-gradient-to-r from-[#0f1a30] to-transparent opacity-90 text-white px-3 py-1 font-bold drop-shadow-xl text-2xl font-dancing">
                {" "}
                For {status}
              </p>
            </figure>
            <div className="py-5">
              <div className="card-actions justify-end mb-4 mt-4">
                <span className="text-gray-600">Tags:</span>
                {facilities.map((facility, idx) => (
                  <div
                    key={idx}
                    className="badge border border-[#FCA311] bg-[#fca2114d] opacity-85 font-bold"
                  >
                    {facility}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-12 mb-5 items-center">
                <h2 className="card-title mb-2 md:text-xl lg:text-4xl font-bold font-pacifico">
                  {estate_title}
                </h2>
                <div className="bg-[#14213D] text-gray-200 font-semibold md:text-xl lg:text-3xl mb-2 px-4 py-1 rounded-tl-full rounded-bl-full animate__animated animate__fadeInRight animate__delay-1s">
                  {status == "sale" ? (
                    <div>
                      Price - {price}
                    </div>
                  ) : (
                    <div>
                      Rent - {price}
                      <small className="text-sm">/per month</small>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-gray-500 text-2xl font-satisfy">{description}</p>
            </div>
            <div className="text-gray-600 font-bold lg:text-xl flex flex-col md:flex-row gap-2">
              <p className="flex items-center justify-center rounded-full py-2 px-5 text-left gap-1 bg-gray-200 "><AiFillHome/> {area}</p>
              <p className="flex items-center justify-center rounded-full py-2 px-5 text-left gap-1 bg-gray-200"><FaLocationDot/> {location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
