import { Cancel } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Fail = () => {
  return (
    <div class='bg-gray-100 h-screen'>
      <div class='bg-white p-6  md:mx-auto justify-center items-center flex flex-col '>
        <Cancel
          className='text-red-600 text-9xl'
          size='large'
          readOnly
          sx={{
            fontSize: "4rem",
          }}
        />
        <div class='text-center'>
          <h3 class='md:text-2xl text-base text-gray-900 font-semibold text-center'>
            Payment Failed!
          </h3>
          <p class='text-gray-600 my-2'>
            Please check your payment details and try.
          </p>
          <div class='py-10 text-center'>
            <Link
              to='/'
              class='px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded'
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fail;
