import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner";
import Navbar from "../../Components/Navbar";
import Estates from "../../Components/Estates";
import { useLoaderData } from "react-router-dom";
import "animate.css";
import Categories from "../../Components/Categories";
import Review from "../../Components/Review";

const Home = () => {
  const estateData = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Echelon | Home</title>
      </Helmet>

      <div className="sticky top-0 z-10">
        <Navbar></Navbar>
      </div>

      <div className="w-[90%] mx-auto">
        {/* Banner section */}
        <div className="mb-8 mt-8">
          <Banner></Banner>
        </div>

        {/* Estates section */}
        <div className="mt-44 border-t-4 border-b-4 border-[#FCA311] py-12 rounded-xl shadow-xl bg-gradient-to-b from-[#14213D] to-transparent">
          <div className="text-center">
            <h1 className="animate__animated animate__slideInDown text-5xl mb-5 font-semibold text-white font-pacifico">
              What we can offer?
            </h1>
            <p className=" text-gray-400 px-2 md:px-12 mb-16 md:mb-0">
              As luxury real estate sellers, we pride ourselves on delivering an
              unparalleled experience tailored to the discerning needs of our
              esteemed clients. At our agency, we offer a comprehensive suite of
              services designed to elevate your property transaction journey to
              new heights of excellence. From meticulously curated marketing
              strategies that showcase the unique allure of your luxury property
              to personalized concierge services that cater to every aspect of
              your transaction, we ensure that your selling experience is not
              only seamless but also imbued with sophistication and distinction.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid md:scale-90 lg:grid-cols-3 gap-8 md:-mt-52 lg:-mt-16">
            {estateData.map((data, idx) => (
              <Estates key={idx} data={data}></Estates>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="flex justify-center flex-col items-center mt-24 mb-12">
          <h1 className="text-6xl font-semibold font-pacifico">
            Choose your Desire!
          </h1>
          <Categories></Categories>
        </div>

        {/* Review section */}
        <div className="flex flex-col-reverse gap-12 justify-between items-center font-poppins mb-24">
          {/* Feedback */}
          <div className="flex md:flex-row flex-col-reverse justify-center md:gap-24 gap-5 items-center w-full bg-[#FCA311] p-4 rounded-xl">
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 w-full md:w-[50%]">
              <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">
                  Your opinion matters!
                </h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                  <span className="text-center">How was your experience?</span>
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      title="Rate 1 stars"
                      aria-label="Rate 1 stars"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-10 h-10 text-yellow-500 dark:text-yellow-700"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      title="Rate 2 stars"
                      aria-label="Rate 2 stars"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-10 h-10 text-yellow-500 dark:text-yellow-700"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      title="Rate 3 stars"
                      aria-label="Rate 3 stars"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-10 h-10 text-yellow-500 dark:text-yellow-700"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      title="Rate 4 stars"
                      aria-label="Rate 4 stars"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-10 h-10 text-yellow-500 dark:text-yellow-700"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      title="Rate 5 stars"
                      aria-label="Rate 5 stars"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-10 h-10 text-gray-600 dark:text-gray-400"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <textarea
                    rows="3"
                    placeholder="Message..."
                    className="p-4 rounded-md resize-none text-gray-100 dark:text-gray-800 bg-gray-900 dark:bg-gray-50"
                  ></textarea>
                  <button
                    type="button"
                    className="py-4 my-8 font-semibold rounded-md bg-[#14213D] text-[#FCA311]"
                  >
                    Leave feedback
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm text-gray-400 dark:text-gray-600"
                >
                  Maybe later
                </a>
              </div>
            </div>
            <div>
              <h1 className="text-[85px] font-poppins font-bold text-white">Have <br />Something <br /> To Share<span className="text-[#14213D]">?</span></h1>
            </div>
          </div>

          {/* Reviews */}
          <div className="flex md:flex-row flex-col w-full justify-evenly gap-5 items-center bg-[#14213D] md:h-[400px] rounded-xl drop-shadow-xl p-4">
            <div>
              <h1 className="text-7xl font-poppins font-bold text-white">
                Wanna See <br /> What Others <br /> Are Saying<span className="text-[#FCA311]">!</span>
              </h1>
            </div>
            <div className="w-[100%] md:w-[50%]">
              <Review></Review>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
