import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ArrowForward } from "@mui/icons-material";
const ProductsCard = ({ product }) => {
  return (
    <div className='group relative'>
      <div className='w-full h-96 cursor-pointer overflow-hidden'>
        <img
          className='w-full h-full object-cover group-hover:scale-110 duration-500'
          src={product.image}
          alt='productImage'
        />
      </div>
      <div className='w-full border-[1px] px-2 py-4'>
        <div className='flex justify-between items-center'>
          <div>
            <h2 className='font-titleFont text-base font-bold'>
              {product.title.substring(0, 15)}...
            </h2>
          </div>
          <div className='flex justify-end gap-2 relative overflow-hidden w-36 text-sm'>
            <div className='flex gap-2 transform group-hover:translate-x-40 transition-transform duration-500'>
              <p className='line-through text-gray-500'>
                ₹{product.oldPrice}/box
              </p>
              <p className='font-semibold'>₹{product.price}/box</p>
            </div>
            <p className='absolute z-20 w-32 text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500'>
              Add to cart
              <span>
                <ShoppingBagIcon />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <div className='absolute top-4 right-0'>
          {product.isNew ? (
            <p className='bg-black text-white font-semibold font-titleFont px-6 py-1'>
              Sale
            </p>
          ) : (
            <p className='bg-red-500 text-white font-semibold font-titleFont px-6 py-1'>
              Out of Stock
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
