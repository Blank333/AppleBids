import React from "react";
import { logoLight } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-gray-900 text-gray-300 py-10 px-20 font-titleFont'>
      <div className='max-w-full mx-auto grid grid-cols-4'>
        {/* -------LOGO-------- */}
        <div className='flex flex-col gap-7'>
          <img className='w-44' src={logoLight} alt='' />
          <p className='text-sm tracking-wide'>(c) Pear Blossom Farms</p>
          <div className='flex gap-5 text-lg'>
            Social Media Social Media Social Media
            {/* Social media */}
          </div>
        </div>
        {/* -------CONTACT-------- */}
        <div>
          <h2 className='text-2xl font-semibold'>Contact Us</h2>
          <div>
            <p>Bahra University, Shimla Hills, Solan</p>
            <p>9876543210</p>
            <p>1800-456-321</p>
            <p>E-mail: ceelxx@gmail.com</p>
          </div>
        </div>
        {/* -------PROFILE-------- */}

        <div>
          <h2 className='text-2xl font-semibold'>Profile</h2>

          <Link to='/login'>
            <p>
              <span></span>
              Account
            </p>
          </Link>
          <Link to='/cart'>
            <p>
              <span></span>
              Checkout
            </p>
          </Link>
          <p>
            <span></span>
            Tracking
          </p>
        </div>
        {/* -------SUBSCRIBE-------- */}
        <div className='flex flex-col gap-2 justify-center items-center'>
          <input
            className='bg-transparent border px-4 py-2 text-sm'
            type='text'
            placeholder='e-mail'
          />
          <button className='p-2 text-sm border rounded hover:bg-gray-700 active:bg-white active:text-black'>
            Subsribe to our mailing list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
