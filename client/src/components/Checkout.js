import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Checkout = (props) => {
  const productData = useSelector((state) => state.applebids.productData);

  const handleCheckout = async (e) => {
    // const stripe = await stripePromise;

    await axios
      .post("http://localhost:4242/pay/", {
        amount: props.totalAmt,
        productData,
      })
      .then((res) => {
        console.log(res);
        window.location.href = res.data.substr(19);
      });
    // const result = await stripe.redirectToCheckout({
    //   sessionId: checkoutSession.data.id,
    // });
    // if (result.error) {
    //   alert(result.error.message);
    // }
  };
  return (
    // <form action='http://localhost:4242/pay' method='POST'>
    <button
      onClick={handleCheckout}
      className='bg-blue-500 text-white hover:bg-blue-600 duration-500 flex items-center justify-center p-2 mt-3 rounded-lg'
    >
      Pay to Online Apple Mandi
    </button>
    // </form>
  );
};

export default Checkout;
