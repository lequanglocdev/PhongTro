import React, {memo} from "react";

const Button = ({ text, textColor, bgColor, Icion ,fullWidth,onClick}) => {
 console.log('re-render')
  return (
    <button
      type="button"
      className={`py-2 px-2 ${textColor} ${bgColor} ${fullWidth && 'w-full'} outline-none rounded-md flex items-center justify-center gap-1`}
      onClick={onClick}
   >
      {text}
      {Icion && <Icion className="text-zinc-100" />}
    </button>
  );
};
export default memo(Button);
