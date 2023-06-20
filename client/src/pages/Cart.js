import React from "react";
import { useSelector } from "react-redux";
import { apple5 } from "../assets";
import CartItem from "../components/CartItem";
const Cart = () => {
  const productData = useSelector((state) => state.applebids.productData);
  return (
    <div>
      <img className='w-full h-60 object-cover' src={apple5} alt='cart' />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-gray-100 py-6 px-4 '>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2>Cart Total </h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-titleFont font-bold text-lg'>₹200</span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping{" "}
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
                vel ut sequi
              </span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
            Total <span className='text-xl font-bold'>₹200</span>
          </p>
          <button className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
