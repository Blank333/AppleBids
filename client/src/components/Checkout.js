import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Checkout = (props) => {
  const productData = useSelector((state) => state.applebids.productData);
  const products = productData.map((item) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: item.title,
      },
      // unit_amount: Math.trunc(req.body.amount) * 100,
      unit_amount: Number(item.price * 100),
    },
    quantity: item.quantity,
  }));

  const handleCheckout = async (e) => {
    await axios
      .post("http://localhost:4242/pay/", {
        products,
      })
      .then((res) => {
        console.log(res);
        window.location.href = res.data.substr(19);
      });
  };
  return (
    <button
      onClick={handleCheckout}
      className='bg-blue-500 text-white hover:bg-blue-600 duration-500 flex items-center justify-center p-2 mt-3 rounded-lg'
    >
      Pay to Online Apple Mandi
    </button>
  );
};

export default Checkout;
