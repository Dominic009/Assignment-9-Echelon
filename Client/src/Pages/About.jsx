import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "animate.css";

const About = () => {
  document.body.style.backgroundColor = "#fafafa";
  return (
    <div>
      <Helmet>
        <title>Echelon | About</title>
      </Helmet>

      <Navbar></Navbar>

      <div className="space-y-9 mt-12 mb-12 *:bg-[#14213D] *:text-white *:drop-shadow-xl *:rounded-xl *:w-[90%] *:mx-auto w-[90%] mx-auto font-poppins">
        <div
          className="text- space-y-2 p-6 border-2 border-[#FCA311]"
          data-aos="fade-right"
        >
          <h1 className="text-4xl font-bold text-gray-100 border-b lg:w-[50%] mb-5 font-satisfy">
            About Echelon Realty
          </h1>
          <p className="text-left text-lg text-gray-300">
            At Echelon Realty, we are not just another real estate agency - you
            are our partners in finding your dream property or selling your
            cherished home. With a deep-rooted commitment to excellence and a
            passion for client satisfaction, we have established ourselves as a
            trusted name in the real estate industry.
          </p>
        </div>
        <hr className="w-[60%] mx-auto" />
        <div
          className="text-center lg:text-right space-y-2 p-6 border-2 border-[#FCA311] bg-[#14213D]"
          data-aos="fade-left"
        >
          <div className="flex justify-end">
            <h1 className="text-4xl font-bold text-gray-100 border-b w-[50%] mb-5 font-satisfy">
              Our Story
            </h1>
          </div>
          <p className="text-left text-lg text-gray-300">
            Echelon Realty was founded with a singular vision: to redefine the
            real estate experience by putting our clients first. Since our
            inception in 1952, we have been dedicated to providing unparalleled
            service, expert guidance, and personalized solutions for all your
            real estate needs. Over the years, we have grown from a small team
            with big ambitions to a leading brokerage serving clients across the
            country.
          </p>
        </div>
        <hr className="w-[60%] mx-auto" />
        <div
          className="space-y-2 p-6 border-2 border-[#FCA311] bg-[#14213D]"
          data-aos="fade-right"
        >
          <h1 className="text-4xl font-bold text-gray-100 border-b lg:w-[50%] text-center lg:text-left mb-5 font-satisfy">
            Our Mission
          </h1>
          <p className="text-left text-lg text-gray-300">
            At Echelon Realty, our mission is simple: to help you achieve your
            real estate goals with confidence and peace of mind. Whether you are
            buying your first home, selling a property, or investing in real
            estate, we are here to empower you with the knowledge, resources,
            and support you need to make informed decisions every step of the
            way.
          </p>
        </div>
        <hr className="w-[60%] mx-auto" />
        <div
          className="text-center lg:text-right space-y-2 p-6 border-2 border-[#FCA311] bg-[#14213D]"
          data-aos="fade-left"
        >
          <div className="flex justify-end">
            <h1 className="text-4xl font-bold text-gray-100 border-b w-[50%] mb-5 font-satisfy">
              Our Approach
            </h1>
          </div>
          <p className="text-left text-lg text-gray-300">
            What sets Echelon Realty apart is our unwavering commitment to
            integrity, professionalism, and personalized service. We understand
            that every client is unique, which is why we take the time to listen
            to your needs, understand your goals, and tailor our approach to
            meet your specific requirements. From our experienced team of real
            estate professionals to our cutting-edge technology and marketing
            strategies, we are dedicated to delivering results that exceed your
            expectations.
          </p>
        </div>
        <hr className="w-[60%] mx-auto" />
        <div
          className="text-center lg:text-left space-y-2 p-6 border-2 border-[#FCA311] bg-[#14213D]"
          data-aos="fade-right"
        >
          <h1 className="text-4xl font-bold text-gray-100 border-b lg:w-[50%] mb-5 font-satisfy">
            Get in Touch
          </h1>
          <p className="text-left text-lg text-gray-300">
            Ready to embark on your real estate journey with Echelon Realty? We
            invite you to discover the difference of working with a brokerage
            that puts your needs first. Contact us today,{" "}
            <Link
              to="/contactUs"
              className="underline underline-offset-4 text-[#ff9831]"
            >
              click here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
