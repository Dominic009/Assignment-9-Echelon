import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Estates = ({data}) => {

const { estate_title, description, location, facilities, id, image, status } = data;


  return (
    <div className="rounded-2xl p-2 border border-[#FCA311] hover:scale-105 transition-all ease-in-out"
>
          <div className="card bg-base-100 shadow-xl lg:h-[600px] relative" data-aos="fade-up">
          {status == "sale" ? <div className="badge-accent bg-rose-700 absolute -right-5 text-white font-bold top- rotate-[40deg] px-6 py-1 rounded-full ">Sale!</div> : <div className="badge-accent bg-green-700 absolute -right-5 text-white font-bold top- rotate-[40deg] px-6 py-1 rounded-full ">Rent!</div>}
            <figure>
              <img
                src={image}
                className="rounded-t-xl"
              />
            </figure>
            <div className="p-4">
            <div className="card-actions justify-end mb-4 mt-4">
                {
                    facilities.map((facility, idx) => <div key={idx} className="badge border border-[#FCA311] bg-[#fca2114d] opacity-70 backdrop-blur-lg">{facility}</div>)
                }
              </div>
              <h2 className="card-title mb-2">
                {estate_title.slice(0, 25)}...
              </h2>
              <p className="text-gray-500">{description.slice(0, 150)} <Link to={`/home/${id}`} className="text-gray-400">...Read More</Link></p>
   
              <div className="font-semibold text-gray-700">
               Location: {location}
              </div>
              <div className="card-actions justify-end mt-5 absolute bottom-5 right-5">
                <Link to={`/home/${id}`} className="btn bg-[#14213D] text-[#FCA311]">View Details</Link>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Estates;

Estates.propTypes = {
  data: PropTypes.object,
}