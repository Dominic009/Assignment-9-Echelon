import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import "animate.css";
import image from "../assets/Contact us/411430-Group-of-people-holding-question-mark-icons.jpg";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact With Us</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="space-y-8 mt-10 mb-12 w-[90%] mx-auto">
        <p className="animate__bounceInLeft animate__animated animate__delay-1s text-4xl text-center font-pacifico font-semibold mb-12 mt-12">
        We would love to
          hear from you! <br /> Reach out to us using the contact information below:
        </p>

        <div className="grid md:grid-cols-3">
            <div className="col-span-2 h-full">
              <img src={image} className="h-full rounded-tl-xl rounded-bl-xl"/>
            </div>
          <div>
            <div className="space-y-10 flex flex-col h-full bg-[#14213D] px-5 py-24 text-white shadow-l-lg rounded-tr-xl rounded-br-xl shadow-[-25px_0px_20px_0px_#00000024]"> 
              <div className="animate__bounceInRight animate__animated animate__delay-2s">
                <h2 className="text-2xl border-b mb-4">Main Office</h2>
                <p>
                  <strong>Address:</strong> 123 Main Street, City, State, ZIP
                </p>
                <p>
                  <strong>Phone:</strong> (123) 456-7890
                </p>
                <p>
                  <strong>Email:</strong> info@echelonrealty.com
                </p>
              </div>

              <div className="animate__bounceInRight animate__animated animate__delay-3s">
                <h2 className="text-2xl border-b mb-4">Customer Support</h2>
                <p>
                  <strong>Phone:</strong> (456) 789-0123
                </p>
                <p>
                  <strong>Email:</strong> support@echelonrealty.com
                </p>
              </div>

              <div className="animate__bounceInRight animate__animated animate__delay-4s">
                <h2 className="text-2xl border-b mb-4">Agent Inquiries</h2>
                <p>
                  <strong>Contact Person:</strong> John Doe
                </p>
                <p>
                  <strong>Phone:</strong> (789) 012-3456
                </p>
                <p>
                  <strong>Email:</strong> john.doe@echelonrealty.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
