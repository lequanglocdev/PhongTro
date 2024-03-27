import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-[40px] bg-secondary1">
      <div className="flex justify-center items-center">
        <ul className="flex justify-between items-center">
          <li>Trang chủ</li>
          <li>Nhà cho thuê</li>
          <li>Căn hộ cho thuê</li>
          <li>Tin tức</li>
          <li>Dịch vụ</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
