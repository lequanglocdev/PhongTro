import React, { useEffect, useState } from "react";
import { InputForm, Button } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isRegister, setRegister] = useState(location.state?.flag);
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
   
  });
  useEffect(() => {
    setRegister(location.state?.flag);
  }, [location.state?.flag]);

  // useEffect(() => {
  //   isLogin && navigate("/");
  // }, [isLogin]);

  const handleSubmit = async () => {
    let invalids = validate(payload);
    if (invalids) {
      dispatch(actions.login(payload));
      navigate('/')
    }
  };

  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);
    fields.forEach((item) => {
      if (item[1] === "")
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            message: "Không để trống trường này",
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
  };

  return (
    <div className="bg-white  w-[600px]  p-[10px] pb-[100px] rounded-md shadow-sm">
      <h4 className="font-semibold text-2xl mb-3">
       Đăng nhập
      </h4>
      <div className="w-full flex flex-col gap-3">
        <InputForm
          label={"Số điện thoại"}
          value={payload.phone}
          setValue={setPayload}
          type={"phone"}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
        />
        <InputForm
          label={"Mật khẩu"}
          value={payload.password}
          setValue={setPayload}
          type={"password"}
          invalidFields={invalidFields}
          setInvalidFields={setInvalidFields}
        />
        <Button
          text={isRegister ? "Đăng kí" : "Đăng nhập"}
          textColor="text-white"
          bgColor="bg-secondary1"
          fullWidth
          onClick={handleSubmit}
        />
      </div>
      <div className="mt-7 flex items-center justify-between">
        <small className="text-[blue] hover:text-[red] cursor-pointer">
          Bạn quên mật khẩu
        </small>
        <small
          onClick={() => {
           navigate('/register')
            setPayload({
              phone: "",
              password: "",
              name: "",
            });
          }}
          className="text-[blue] hover:text-[red] cursor-pointer"
        >
          Tạo tài khoản
        </small>
      </div>
    </div>
  );
};

export default Login;
