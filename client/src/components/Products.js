import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortingOption, setSortingOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSortByPrice = () => {
    setSortingOption("price");
  };

  const handleSortByCategory = () => {
    setSortingOption("category");
  };

  const handleSortByName = () => {
    setSortingOption("name");
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortingOption === "price") {
      return a.price - b.price;
    } else if (sortingOption === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortingOption === "name") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
      <div className='flex space-x-4 justify-start max-w-screen-xl mx-auto mb-4'>
        <button
          className='px-4 py-2 text-white bg-red-500 hover:bg-red-600 duration-300 rounded-md'
          onClick={handleSortByPrice}
        >
          Sort by Price
        </button>
        <button
          className='px-4 py-2 text-white bg-red-500 hover:bg-red-600 duration-300 rounded-md'
          onClick={handleSortByCategory}
        >
          Sort by Category
        </button>
        <button
          className='px-4 py-2 text-white bg-red-500 hover:bg-red-600 duration-300 rounded-md'
          onClick={handleSortByName}
        >
          Sort by Name
        </button>
        <div className='flex-grow'>
          <input
            type='text'
            placeholder='Search products...'
            value={searchTerm}
            onChange={handleSearch}
            className='px-4 py-2 border border-red-300 rounded-md w-full'
          />
        </div>
      </div>

      {searchTerm ? (
        <div className='max-w-screen-xl mx-auto grid grid-cols-4 gap-4'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductsCard key={item.id} product={item} />
            ))
          ) : (
            <p>No matching products found.</p>
          )}
        </div>
      ) : (
        <div className='max-w-screen-xl mx-auto grid grid-cols-4 gap-4'>
          {sortedProducts.map((item) => (
            <ProductsCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
