import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AddProduct = () => {
  const userInfo = useSelector((state) => state.applebids.userInfo);
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    title: "",
    description: "",
    farm: "",
    price: 0,
    boxes: 0,
    category: "",
    DoH: "",
    isNew: false,
    oldPrice: 0,
    uploadedBy: "",
  });

  const addProd = async (e) => {
    e.preventDefault();
    if (
      !document.forms["addProd"]["title"].value ||
      !document.forms["addProd"]["description"].value ||
      !document.forms["addProd"]["farm"].value ||
      !document.forms["addProd"]["price"].value ||
      !document.forms["addProd"]["category"].value ||
      !document.forms["addProd"]["DoH"].value
    ) {
      toast.error("Please fill out the required fields!");
      return false;
    }
    try {
      const docRef = await addDoc(
        collection(db, "products"),
        {
          title: formData.title,
          description: formData.description,
          farm: formData.farm,
          price: formData.price,
          boxes: formData.boxes,
          category: formData.category,
          DoH: formData.DoH,
          isNew: formData.isNew,
          oldPrice: formData.oldPrice,
          uploadedBy: userInfo.name,
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
        <form action='/AddProduct' method='POST' name='addProd'>
          <div className='-mx-3 flex flex-wrap'>
            <div className='w-full px-3 sm:w-1/2'>
              <div className='mb-2'>
                <div className='flex'>
                  <label
                    htmlFor='farm'
                    className='mb-2 block text-base font-medium text-[#07074D]'
                  >
                    Name of Farm
                  </label>
                  <span className='text-red-500 '>*</span>
                </div>
                <input
                  type='text'
                  required
                  onChange={handleChange}
                  name='farm'
                  id='farm'
                  placeholder='Name of Farm'
                  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
            </div>

            <div className='w-full px-3 sm:w-1/2'>
              <div className='mb-2'>
                <div className='flex'>
                  <label
                    htmlFor='title'
                    className='mb-2 block text-base font-medium text-[#07074D]'
                  >
                    Variety
                  </label>
                  <span className='text-red-500 '>*</span>
                </div>
                <input
                  type='text'
                  required
                  onChange={handleChange}
                  name='title'
                  id='title'
                  placeholder='Variety'
                  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
            </div>
          </div>

          <div className='-mx-3 flex flex-wrap'>
            <div className='w-full px-3 sm:w-1/2'>
              <div className='mb-2'>
                <div className='flex'>
                  <label
                    htmlFor='boxes'
                    className='mb-2 block text-base font-medium text-[#07074D]'
                  >
                    Boxes Available
                  </label>
                  <span className='text-red-500 '>*</span>
                </div>
                <input
                  type='number'
                  name='boxes'
                  id='boxes'
                  required
                  placeholder='Boxes'
                  onChange={handleChange}
                  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
            </div>

            <div className='w-full px-3 sm:w-1/2'>
              <div className='mb-2'>
                <div className='flex'>
                  <label
                    htmlFor='price'
                    className='mb-2 block text-base font-medium text-[#07074D]'
                  >
                    Price per box
                  </label>
                  <span className='text-red-500 '>*</span>
                </div>

                <input
                  type='number'
                  name='price'
                  id='price'
                  required
                  placeholder='Price'
                  onChange={handleChange}
                  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
            </div>
          </div>

          <div className='mb-2'>
            <div className='flex'>
              <label
                htmlFor='description'
                className='mb-2 block text-base font-medium text-[#07074D]'
              >
                Description
              </label>
              <span className='text-red-500 '>*</span>
            </div>
            <textarea
              rows='5'
              name='description'
              id='description'
              required
              placeholder='Description'
              value={formData.description}
              onChange={handleChange}
              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>

          <div className='-mx-3 flex flex-wrap'>
            <div className='w-full px-3 sm:w-1/2'>
              <div className='mb-2'>
                <div className='flex'>
                  <label
                    htmlFor='DoH'
                    className='mb-2 block text-base font-medium text-[#07074D]'
                  >
                    Date of harvest
                  </label>
                  <span className='text-red-500 '>*</span>
                </div>
                <input
                  type='date'
                  name='DoH'
                  id='DoH'
                  required
                  placeholder=''
                  onChange={handleChange}
                  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
            </div>

            <div className='w-full px-3 sm:w-1/2 '>
              <div className='flex'>
                {" "}
                <label
                  htmlFor='category'
                  className='mb-2 block text-base font-medium text-[#07074D]'
                >
                  Category
                </label>
                <span className='text-red-500 '>*</span>
              </div>
              <select
                rows='5'
                name='category'
                id='category'
                required
                value={formData.category}
                onChange={handleChange}
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              >
                <option value=''>--Please Select a Category</option>
                <option value='Royal'>Royal</option>
                <option value='Golden'>Golden</option>
                <option value='Crisp'>Crisp</option>
                <option value='Tangy'>Tangy</option>
              </select>
            </div>
          </div>

          <div className='-mx-3 flex flex-wrap'>
            <div className='w-full px-3 sm:w-1/2'>
              <div className='mb-2'>
                <div className='flex'>
                  <label
                    htmlFor='DoH'
                    className='mb-2 block text-base font-medium text-[#07074D]'
                  >
                    Sale?
                  </label>
                </div>
                <div className='flex justify-between px-8 items-center'>
                  <div className='flex'>
                    <input
                      type='radio'
                      name='isNew'
                      id='isNew'
                      placeholder=''
                      onChange={handleChange}
                      className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    />
                    <label
                      for='isNew'
                      class='pl-3 text-base font-medium text-[#07074D]'
                    >
                      Yes
                    </label>
                  </div>

                  <div className='flex'>
                    <input
                      type='radio'
                      name='isNew'
                      id='isNew'
                      required
                      placeholder=''
                      onChange={handleChange}
                      className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    />
                    <label
                      for='isNew'
                      class='pl-3 text-base font-medium text-[#07074D]'
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full px-3 sm:w-1/2 '>
              <div className='flex'>
                {" "}
                <label
                  htmlFor='oldPrice'
                  className='mb-2 block text-base font-medium text-[#07074D]'
                >
                  Old Price
                </label>
              </div>
              <input
                type='number'
                name='oldPrice'
                id='oldPrice'
                placeholder='Old Price'
                onChange={handleChange}
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
          </div>

          <div className='mb-3 flex flex-wrap'>
            <label
              className='mb-2 block text-base font-medium text-[#07074D]'
              htmlFor='image'
            >
              Upload image
            </label>
            <input
              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              id='image'
              type='file'
              accept='image/png, image/gif, image/jpeg'
            ></input>
          </div>

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
