import React, { useCallback } from "react";
import logo from "../../assets/Logo.png";
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { useNavigate } from "react-router-dom";
import { path } from "../../ultils/constant";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const { FaPlusCircle } = icons;

const Header = () => {
  const navigate = useNavigate();

  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: flag });
  }, {});
  return (
    <div className="w-1200  h-[60px] flex items-center justify-between ">
      <div>
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[240px] h-full flex items-center object-cover"
          />
        </Link>
      </div>
      <Navbar />
      <div className="flex items-center gap-1">
        <Button
          text={"Đăng nhập"}
          textColor="text-slate-700"
          bgColor="bg-yellow-400"
          onClick={() => goLogin(false)}
        />
        <Button
          text={"Đăng kí"}
          textColor="text-slate-700"
          bgColor="bg-yellow-400"
          onClick={() => goLogin(true)}
        />
        <Button
          text={"Đăng tin"}
          textColor="text-slate-700"
          bgColor="bg-red-500"
          Icion={FaPlusCircle}
        />
      </div>
    </div>
  );
};

export default Header;
