import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-full flex flex-col items-center m-auto h-full border ">
      <Header />
      <div className="w-1200 flex flex-col items-center justify-start mt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
