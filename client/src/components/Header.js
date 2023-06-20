import React from "react";
import { IconButton } from "@mui/material";
import { PersonOutline, ShoppingBagOutlined } from "@mui/icons-material";
import { logoDark } from "../assets/index";

const Header = () => {
  return (
    <div className='flex justify-between border-b-2 border-b-gray-400 h-12 mb-2'>
      <div>
        <img className='w-36' src={logoDark} alt='logo' />
      </div>
      <div>
        <IconButton sx={{ color: "black" }}>
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
