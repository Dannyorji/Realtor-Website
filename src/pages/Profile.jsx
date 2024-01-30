import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "Daniel",
    email: "dnnyorji@gmail.com",
  });
  const { name, email } = formData;
  function handleOnClick() {
    auth.signOut();
    navigate("/");
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold ">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/*   */}

            <input
              type="text"
              value={name}
              name="name"
              disabled
              className="w-full px-4 py-2 text-gray-700 text-xl bg-white border border-gray-300 rounded mb-6"
            />
            {/*   */}
            <input
              type="email"
              value={email}
              name="email"
              disabled
              className="w-full px-4 py-2 text-gray-700 text-xl bg-white border border-gray-300 rounded mb-6"
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="flex items-center ">
                Do you want to change your name?
                <span className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer">
                  Edit
                </span>
              </p>
              <p
                onClick={handleOnClick}
                className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-150 cursor-pointer"
              >
                Sign Out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
