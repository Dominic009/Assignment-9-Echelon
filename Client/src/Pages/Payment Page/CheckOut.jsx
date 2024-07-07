import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/Navbar";
import "../../index.css";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const CheckOut = () => {

  const { user } = useContext(AuthContext);
  const { displayName, email } = user;


  const handlePayment = () => {
    axios
      .post("http://localhost:8000/payment", {
        cus_name: {displayName},
        cus_email: {email},
        amount: 1000,
        currency: "USD",
      })
      .then((res) => {
        console.log(res);

        const redirectURL = res.data.paymentURL;

        if(redirectURL){
          window.location.replace(redirectURL)
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Echelon | Payment</title>
      </Helmet>
      <div>
        <Navbar></Navbar>
      </div>

      <div className="font-sans bg-white p-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">
              Checkout
            </h2>
          </div>

          <div className="mt-12">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-3xl font-bold text-gray-300">01</h3>
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  Personal Details
                </h3>
              </div>

              <div className="md:col-span-2">
                <form>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder={user?.displayName}
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder={ user?.lastName || "N/A" }
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder={user?.email}
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder={ user?.phoneNumber || "N/A" }
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-300">02</h3>
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  Payment Address
                </h3>
              </div>

              <div className="md:col-span-2">
                <form>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Street address"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="City"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="State"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Zip Code"
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-300">03</h3>
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  Payment method
                </h3>
              </div>

              <div className="md:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center">
                    <input
                      readOnly
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="card"
                      checked
                    />
                    <label
                      htmlFor="card"
                      className="ml-4 flex gap-2 cursor-pointer"
                    >
                      <img
                        src="https://readymadeui.com/images/visa.webp"
                        className="w-12"
                        alt="card1"
                      />
                      <img
                        src="https://readymadeui.com/images/american-express.webp"
                        className="w-12"
                        alt="card2"
                      />
                      <img
                        src="https://readymadeui.com/images/master.webp"
                        className="w-12"
                        alt="card3"
                      />
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      className="w-5 h-5 cursor-pointer"
                      id="paypal"
                    />
                    <label
                      htmlFor="paypal"
                      className="ml-4 flex gap-2 cursor-pointer"
                    >
                      <img
                        src="https://readymadeui.com/images/paypal.webp"
                        className="w-20"
                        alt="paypalCard"
                      />
                    </label>
                  </div>
                </div>

                <div className="grid sm:grid-cols-4 gap-4 mt-4">
                  <div className="col-span-2">
                    <input
                      type="number"
                      placeholder="Card number"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="EXP."
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="CVV"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-4 mt-12">
              <button
                type="button"
                className="px-9 py-2 text-sm font-semibold tracking-wide bg-transparent border-2 border-[#14213D] text-gray-800 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                Pay later
              </button>
              <button
                type="button"
                onClick={handlePayment}
                className="px-9 py-2 text-sm font-semibold tracking-wide bg-[#14213D] text-[#FCA311] rounded-md hover:bg-white hover:border-2 hover:border-[#14213D] transition duration-300 ease-in-out"
              >
                Pay now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
