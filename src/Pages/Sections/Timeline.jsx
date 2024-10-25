import React from "react";
import { myProfile } from "@/Data/MyData";

function Timeline() {
  const { Timeline } = myProfile;
  return (
    <div className="w-[70vw] font-Mukta">
      <h4 className="font-Alata tracking-wider text-4xl py-5 ">TIMELINE</h4>
      {Timeline.map((value, index) => {
        return (
          <p className="py-5 border-b-2 ">
            <p key={index} className="text-2xl py-5 text-LayoutPink">{value.year}</p>
            <ul>
              {value.position.map((value, index) => {
                return <li  key={index} className="py-2 list-disc list-inside" >{value}</li>;
              })}
            </ul>
          </p>
        );
      })}
    </div>
  );
}

export default Timeline;
