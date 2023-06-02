import React, { useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import DiamondIcon from '@mui/icons-material/Diamond';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";



const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center p-4 pt-8 container m-auto">
        <div className={`hidden md:block ${isMenu ? "block" : "hidden"}`}>
          <ul className="list-none capitalize flex">
            <Link to={"/"}><li className="px-4 relative cursor-pointer">Home</li></Link>
            <Link to={"/Category"}><li className="px-4 relative cursor-pointer">Category</li></Link>
            {/* <Link to={"/SingleHotelView"}><li className="px-4 relative cursor-pointer">Virtual Tour</li></Link> */}
          </ul>
        </div>
        <div className="w-20 md:w-30">
          <Link to={'/'}>
             <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:block">
          <button className="px-4 p-3 uppercase font-normal">
            <DiamondIcon/>
            <span className="p-1">Reservation</span>
          </button>
          <button className="px-4 p-3 bg-[#d27548] uppercase text-white font-normal rounded">
            book now
          </button>
        </div>
        <div className="block md:hidden px-8 p-4" onClick={() => setIsMenu(!isMenu)}>
          <DensityMediumIcon />
        </div>
      </div>
      <div className="reletive">
      <div className={`${isMenu ? "block" : "hidden"} bg-[#d27548] text-white md:hidden absolute rounded left-0 right-0`}>
        <ul className="list-none capitalize flex flex-col">
        <Link to={"/"}><li className="p-1 text-center cursor-pointer hover:bg-orange-700" onClick={() => setIsMenu(false)}>Home</li></Link>
        <Link to={"/Category"}><li className="p-1 text-center cursor-pointer hover:bg-orange-700" onClick={() => setIsMenu(false)}>Category</li></Link>
        <Link to={"/"}><li className="p-1 text-center cursor-pointer hover:bg-orange-700" onClick={() => setIsMenu(false)}>Virtual Tour</li></Link>
        </ul>
      </div>
      </div>
    </>
  );
};

export default Header;
