import React from "react";
import { IconButton } from "@mui/material";
import { PersonOutline, ShoppingBagOutlined } from "@mui/icons-material";
import { logoDark } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.applebids.productData);
  return (
    <div className='container m-auto p-3 rounded-b-lg flex justify-between border-b-2 border-b-gray-400 bg-white mb-2 sticky top-0 z-50'>
      <div>
        <Link to='/'>
          <img className='w-36' src={logoDark} alt='logo' />
        </Link>
      </div>
      <div>
        <IconButton sx={{ color: "black" }}>
          {productData.length}
          <ShoppingBagOutlined />
        </IconButton>

        <IconButton sx={{ color: "black" }}>
          <PersonOutline />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
