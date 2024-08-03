import { FaLongArrowAltRight } from "react-icons/fa";
import React from "react";
function Posts() {
  const content = [
    {
      postTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, praesentium.",
      postDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, praesentium.",
    },
    {
      postTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, praesentium.",
      postDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, praesentium.",
    },
    {
      postTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, praesentium.",
      postDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, praesentium.",
    },
  ];
  return (
    <div className="bg-black h-[100vh] w-full flex-col flex items-center  text-white">
      <div>
        <h1 className="text-3xl font-bold leading-snug tracking-wide my-2">
          Recent Posts
        </h1>
        {content.map((value, index) => {
          return (
            <>
              <p
                className="text-2xl font-bold text-pink-700 leading-snug "
                key={index}
              >
                {value.postTitle}
              </p>
              <p
                className="text-lg leading-snug tracking-wide my-2"
                key={index}
              >
                {value.postDescription}
              </p>
            </>
          );
        })}
      </div>
      <p className="flex items-center justify-end w-[55vw] my-28 text-lg font-semibold">
      Read More
       <span className="m-2"><FaLongArrowAltRight /></span> </p>
    </div>
  );
}

export default Posts;
