import React from "react";
import LinkPreview from "@/Components/LinkPreview";
function AllProjects() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center py-[120px] bg-black text-white font-Mukta text-4xl">
      <div className="w-[70vw] flex flex-col items-start justify-start mt-14 text-6xl ">
        <p className="font-Alata py-2 tracking-widest">PROJECTS</p>
        <p className="text-base tracking-normal text-gray-500 font-semibold">
          Here are some of my selected projects worth sharing.
        </p>
      </div>
      <div className="w-[70vw] flex flex-col items-start py-7 justify-start text-6xl">
        {/* start */}
        <div className="flex items-center w-[70vw] justify-between border-b-2 py-10">
          <p>
            Lorem ipsum
            <LinkPreview
              text="dolor"
              previewContent="https://tempstation.web.app/"
              linkUrl={"https://tempstation.web.app/"}
            />{" "}
            consectetur
          </p>

          <p className="text-xl">Frontend Development</p>
        </div>
        {/* start */}
        <div className="flex items-center w-[70vw] justify-between border-b-2 py-10">
          <p>
            Lorem ipsum
            <LinkPreview
              text="dolor"
              previewContent="https://ui.lukacho.com/templates"
              linkUrl={"https://ui.lukacho.com/templates"}
            />{" "}
            consectetur
          </p>

          <p className="text-xl">Frontend Development</p>
        </div>
        {/* start */}
        <div className="flex items-center w-[70vw] justify-between border-b-2 py-10">
          <p>
            Lorem ipsum
            <LinkPreview
              text="dolor"
              previewContent="https://ui.lukacho.com/templates"
              linkUrl={"https://ui.lukacho.com/templates"}
            />{" "}
            consectetur
          </p>

          <p className="text-xl">Frontend Development</p>
        </div>
        {/* start */}
        <div className="flex items-center w-[70vw] justify-between border-b-2 py-10">
          <p>
            Lorem ipsum
            <LinkPreview
              text="dolor"
              previewContent="https://ui.lukacho.com/templates"
              linkUrl={"https://ui.lukacho.com/templates"}
            />{" "}
            consectetur
          </p>

          <p className="text-xl">Frontend Development</p>
        </div>
        {/* start */}
        <div className="flex items-center w-[70vw] justify-between border-b-2 py-10">
          <p>
            Lorem ipsum
            <LinkPreview
              text="dolor"
              previewContent="https://ui.lukacho.com/templates"
              linkUrl={"https://ui.lukacho.com/templates"}
            />{" "}
            consectetur
          </p>

          <p className="text-xl">Frontend Development</p>
        </div>
      </div>
    </div>
  );
}

export default AllProjects;

{
  /* <LinkPreview  text="OpenAI"
          previewContent="https://ui.lukacho.com/templates" 
          linkUrl={"https://ui.lukacho.com/templates"}
          /> */
}
