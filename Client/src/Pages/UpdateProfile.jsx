import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";

const UpdateProfile = () => {


  const auth = getAuth(app);
  const { user } = useContext(AuthContext);



  const handleUpdate = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
      .then((res) => {
        console.log(res);
        toast.success("Profile has been updated, Please refresh.");
      })
      .catch((error) => console.log(error));
  };


  return (
    <div>
      <Helmet>
        <title>Update Profile</title>
      </Helmet>

      <div>
        <Navbar></Navbar>
      </div>
      <div className="text-center mt-24 text-3xl font-semibold">
        <h1>Update Your Profile!</h1>
      </div>
      <div className="w-[90%] mx-auto mt-12 mb-24">
        <div className="flex justify-center flex-col md:flex-row items-center gap-2 w-full">
          {/* user image */}
          <div className="w-[50%] bg-no-repeat drop-shadow-xl">
            <img
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://static.vecteezy.com/system/resources/previews/004/991/321/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
              }
              className="h-full w-full"
            />
          </div>

          {/* user details */}
          <form onSubmit={handleUpdate} className="space-y-5 w-full p-5">
            <div className="flex flex-col space-y-1 relative">
              <label>Name</label>
              <input
                placeholder={user.displayName}
                type="text"
                name="name"
                className="border px-2 py-[11px] rounded-lg outline-none text-gray-600 "
              />

              <div className="text-right absolute top-6 right-0 w-[30%] shadow-[-12px_px_px_px_#1a202c]">
                <button className="btn w-full bg-[#14213D] text-[#FCA311] text-lg">
                  Update
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-1 relative">
              <label>Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder={user?.photoURL || "Not provided"}
                className="border px-2 py-[11px] rounded-lg outline-none text-gray-600 "
              />

              <div className="text-right absolute top-6 right-0 w-[30%] shadow-[-12px_px_px_px_#1a202c]">
                <button className="btn w-full bg-[#14213D] text-[#FCA311] text-lg">
                  Update
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <label>
                Email <small className="text-gray-400">(Not editable)</small>
              </label>
              <input
                name="email"
                value={user.email}
                className="border p-2 rounded-lg outline-none text-gray-600 cursor-not-allowed"
              />
            </div>
          </form>
        </div>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default UpdateProfile;
