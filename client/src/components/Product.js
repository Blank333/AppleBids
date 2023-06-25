import { Star } from "@mui/icons-material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/appleSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1);
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
        <div className='w-2/5 relative'>
          <img
            className='w-full h-[550px] object-cover'
            src={details.image}
            alt='productImage'
          />
          <div className='absolute top-4 right-0'>
            {details.isNew && (
              <p className='bg-green-500 text-white font-semibold font-titleFont px-6 py-1'>
                For Sale
              </p>
            )}
          </div>
        </div>
        <div className='w-3/5 flex flex-col justify-center gap-12'>
          <h2 className='text-4xl font-semibold'>{details.title}</h2>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-gray-800 mt-1 font-titleFont'>
                Farm: {details.farm}
              </h2>
              <h2 className='text-gray-400 mt-1 font-titleFont'>
                by: {details.uploadedBy}
              </h2>
            </div>
            <div>
              {details.boxes ? (
                <p className='mt-1 text-gray-800'>
                  <span>{details.boxes} boxes available</span>
                </p>
              ) : (
                <p className='bg-red-500 p-2 text-white text-center'>
                  Sold out!
                </p>
              )}
              {details.isNew && (
                <p className='line-through mt-1   font-base text-gray-500'>
                  ₹{details.oldPrice}/box
                </p>
              )}

              <p className='font-medium text-2xl'>₹{details.price}/box</p>
            </div>
          </div>
          <div className='flex items-center gap-2 text-base'>
            <div className='flex'>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className='text-xs text-gray-400'>(1 Customer Review)</p>
          </div>
          <p className='text-base text-gray-600 -mt-3'>{details.description}</p>
          <div className='flex gap-4'>
            <div className='w-60 flex items-center justify-between text-gray-500 gap-4 border p-3'>
              <p className='text-sm'>Quantity</p>
              <div className='flex items-center gap-4 text-sm font-semibold'>
                <button
                  onClick={() =>
                    baseQty > 1 ? setBaseQty(Number(baseQty) - 1) : 0
                  }
                  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                >
                  -
                </button>
                <input
                  type='text'
                  className='w-10 text-center'
                  placeholder={baseQty}
                  value={baseQty}
                  onChange={(e) => setBaseQty(e.target.value)}
                />

                <button
                  onClick={() => setBaseQty(Number(baseQty) + 1)}
                  className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details.id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQty,
                    description: details.description,
                  })
                ) &
                toast.success(
                  `${baseQty} ${details.title} has been added to cart`
                )
              }
              className='bg-black text-white py-3 px-6 active:bg-gray-800 flex gap-2'
            >
              Add to Cart
              <ShoppingBagIcon />
            </button>
          </div>
          <div className='flex justify-between'>
            <p className='text-base text-gray-500'>
              Category:{" "}
              <span className='font-medium capitalize text-gray-600'>
                {details.category}
              </span>
            </p>
            <p className='text-gray-500 text-base'>
              Date of Harvest:{" "}
              <span className='font-medium capitalize text-gray-600'>
                {details.DoH}
              </span>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  );
};

export default Product;
