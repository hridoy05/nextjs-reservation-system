import React from "react";
import Navbar from "../../../components/Navbar";
import Header from "../components/Header";
import Menu from "../components/Menu";
import RestaurantNavbar from "../components/RestaurantNavbar";

const RestaurentMenu = () => {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar />
        <Menu />
      </div>
    </>
  );
};

export default RestaurentMenu;
