import React from "react";

function Button(props) {
  const text = props.text
  return (
    <button class="connect_button ">
      <div className="h-full w-full  bg-gradient-to-br rounded-full from-purple-500 to-pink-600 flex items-center justify-center">
        <div className=" h-[45px] w-[173px] flex items-center rounded-full justify-center bg-black">
          {text}
        </div>
      </div>
    </button>
  );
}

export default Button;
