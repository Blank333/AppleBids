import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    title: "",
    description: "",
    price: 0,
    category: "",
    isNew: false,
    oldPrice: 0,
  });

  const addProd = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(
        collection(db, "products"),
        {
          title: formData.title,
          description: formData.description,
          price: formData.price,
          category: formData.category,
          isNew: formData.isNew,
          oldPrice: formData.oldPrice,
        },
        { merge: false }
      );
      setTimeout(() => {
        navigate("/");
      }, 1500);
      toast.success(`You have added ${formData.title} to the Mandi`);
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Failed to add Product");
    }
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='flex items-center justify-center p-12'>
      <div className='mx-auto w-full max-w-[550px]'>
        <form action='/AddProduct' method='POST'>
          <div className='-mx-3 flex flex-wrap'>
            <div className='w-full px-3 sm:w-1/2'>
              <div className='mb-5'>
                <label
                  for='title'
                  className='mb-3 block text-base font-medium text-[#07074D]'
                >
                  Variety
                </label>
                <input
                  type='text'
                  value={formData.title}
                  onChange={handleChange}
                  name='title'
                  id='title'
                  placeholder='Variety'
                  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
            </div>
            <div className='w-full px-3 sm:w-1/2'>
              <div className='mb-5'>
                <label
                  for='price'
                  className='mb-3 block text-base font-medium text-[#07074D]'
                >
                  Price per box
                </label>
                <input
                  type='number'
                  name='price'
                  id='price'
                  placeholder='Price'
                  value={formData.price}
                  onChange={handleChange}
                  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
            </div>
          </div>
          <div className='mb-5'>
            <label
              for='description'
              className='mb-3 block text-base font-medium text-[#07074D]'
            >
              Description
            </label>
            <textarea
              rows='5'
              name='description'
              id='description'
              placeholder='Description'
              value={formData.description}
              onChange={handleChange}
              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>
          <div className='mb-5'>
            <label
              for='category'
              className='mb-3 block text-base font-medium text-[#07074D]'
            >
              Category
            </label>
            <select
              rows='5'
              name='category'
              id='category'
              value={formData.category}
              onChange={handleChange}
              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            >
              <option value='Royal'>Royal</option>
              <option value='Golden'>Golden</option>
              <option value='Crisp'>Crisp</option>
              <option value='Tangy'>Tangy</option>
            </select>
          </div>

          {/* <div class='mb-5'>
            <label
              for='guest'
              class='mb-3 block text-base font-medium text-[#07074D]'
            >
              How many guest are you bringing?
            </label>
            <input
              type='number'
              name='guest'
              id='guest'
              placeholder='5'
              min='0'
              class='w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>

          <div class='-mx-3 flex flex-wrap'>
            <div class='w-full px-3 sm:w-1/2'>
              <div class='mb-5'>
                <label
                  for='date'
                  class='mb-3 block text-base font-medium text-[#07074D]'
                >
                  Date
                </label>
                <input
                  type='date'
                  name='date'
                  id='date'
                  class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
            </div>
            <div class='w-full px-3 sm:w-1/2'>
              <div class='mb-5'>
                <label
                  for='time'
                  class='mb-3 block text-base font-medium text-[#07074D]'
                >
                  Time
                </label>
                <input
                  type='time'
                  name='time'
                  id='time'
                  class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
            </div>
          </div>

          <div class='mb-5'>
            <label class='mb-3 block text-base font-medium text-[#07074D]'>
              Are you coming to the event?
            </label>
            <div class='flex items-center space-x-6'>
              <div class='flex items-center'>
                <input
                  type='radio'
                  name='radio1'
                  id='radioButton1'
                  class='h-5 w-5'
                />
                <label
                  for='radioButton1'
                  class='pl-3 text-base font-medium text-[#07074D]'
                >
                  Yes
                </label>
              </div>
              <div class='flex items-center'>
                <input
                  type='radio'
                  name='radio1'
                  id='radioButton2'
                  class='h-5 w-5'
                />
                <label
                  for='radioButton2'
                  class='pl-3 text-base font-medium text-[#07074D]'
                >
                  No
                </label>
              </div>
            </div>
          </div> */}

          <div>
            <button
              onClick={addProd}
              className='hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none'
            >
              Submit
            </button>
          </div>
        </form>
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

export default AddProduct;
