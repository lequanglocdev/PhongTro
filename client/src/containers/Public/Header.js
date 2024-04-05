import React, { useCallback } from "react";
import logo from "../../assets/Logo.png";
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { useNavigate } from "react-router-dom";
import { path } from "../../ultils/constant";
import { useSelector,useDispatch } from "react-redux";
import * as actions from "../../store/actions";


import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const { FaPlusCircle } = icons;

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.auth);
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: flag });
  }, []);
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
        {!isLogin && (
          <div className="flex items-center gap-1">
            <small>Phongtro123 xin chào bạn</small>
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
          </div>
        )}
        {isLogin && (
          <div className="flex items-center gap-1">
            <small>Tên</small>
            <Button
              text={"Đăng xuất"}
              textColor="text-slate-700"
              bgColor="bg-yellow-400"
              onClick={() => dispatch(actions.logout())}
            />
           
          </div>
        )}
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
