import React, { useEffect, useState } from "react";
import { InputForm, Button } from "../../components";
import {  useLocation } from "react-router-dom";
import {  useDispatch } from "react-redux";
const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [register, setRegister] = useState(location.state?.flag);
  // console.log(location); //

  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
    name: "",
  });
  useEffect(() => {
    setRegister(location.state?.flag);
  }, [location.state?.flag]);

  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);
    fields.forEach((item) => {
      if (item[1] === "")
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            mes: "Không để trống trường này",
          },
        ]);
      invalids++;
    });
    fields.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Mật khẩu phải có tối thiểu 6 ký tự",
              },
            ]);
            invalids++;
          }

          break;
        case "phone":
          if (typeof +item[1] !== "number") {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Số điện thoại không hợp lệ",
              },
            ]);
            invalids++;
          }
          break;
        default:
          break;
      }
    });
    return invalids;
    console.log(payload);
  };

  const handleSubmit = async () => {
    // console.log(payload);
    // register
    //   ? dispatch(actions.register(payload))
    //   : dispatch(actions.login(payload));
    let invalids = validate(payload)
    console.log(invalids);
    console.log(invalidFields)
  };

  return (
    <div className="bg-white  w-[600px]  p-[10px] pb-[100px] rounded-md shadow-sm">
      <h4 className="font-semibold text-2xl mb-3">
        {register ? "Đăng ký" : "Đăng nhập"}
      </h4>
      <div className="w-full flex flex-col gap-3">
        {register && (
          <InputForm
            label={"Họ Tên"}
            value={payload.name}
            setValue={setPayload}
            type={"name"}
          />
        )}
        <InputForm
          label={"Số điện thoại"}
          value={payload.phone}
          setValue={setPayload}
          type={"phone"}
        />
        <InputForm
          label={"Mật khẩu"}
          value={payload.password}
          setValue={setPayload}
          type={"password"}
        />
        <Button
          text={register ? "Đăng kí" : "Đăng nhập"}
          textColor="text-white"
          bgColor="bg-secondary1"
          fullWidth
          onClick={handleSubmit}
        />
      </div>
      <div className="mt-7 flex items-center justify-between">
        {register ? (
          <small>
            Bạn đã có tài khoản?
            <span
              className="text-[blue] hover:text-[red] cursor-pointer"
              onClick={() => setRegister(false)}
            >
              Đăng nhâp ngay
            </span>
          </small>
        ) : (
          <>
            <small className="text-[blue] hover:text-[red] cursor-pointer">
              Bạn quên mật khẩu
            </small>
            <small
              onClick={() => setRegister(true)}
              className="text-[blue] hover:text-[red] cursor-pointer"
            >
              Tạo tài khoản
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
