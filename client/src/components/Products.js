import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "products")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(newData);
      console.log(products, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4 '>
        <h1 className='text2x1 bg-red-500 text-white py-2 w-80 text-center'>
          Farm Fresh Himachali Apples
        </h1>
        <span className='w-20 h-[3px] bg-gray-400'></span>
        <p className='max-w-[60vw] min-w-[500px] text-gray-600 text-center m-1'>
          Experience the freshness and flavor of Himachal Pradesh's hand-picked
          apples, delivered straight from the orchards to your doorstep. Each
          apple embodies the authentic taste of this region, cultivated amidst
          the pristine mountains and fertile valleys. Packed with care and
          quality-checked, our premium apples bring the goodness of nature to
          your table, ready to be enjoyed as a healthy snack or used in culinary
          creations. Indulge in the unparalleled freshness and nutritional value
          of Himachal's finest apples, a true delight for your senses.
        </p>
        <span className='w-[80vw] h-[2px] bg-gray-300 mb-8'></span>
      </div>
      <div className='max-w-screen-xl mx-auto grid grid-cols-4 gap-4'>
        {products.map((item) => (
          <ProductsCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
