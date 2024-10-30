import React from "react";
import LinkPreview from "@/Components/LinkPreview";
import { myProfile } from "@/Data/MyData";

function AllProjects() {
  const { projects } = myProfile;

  return (
    <div className="w-full h-auto flex flex-col items-center pt-[120px] justify-center min-h-screen bg-black text-white font-Mukta text-xl max-xl:text-xl">
      <div className="w-[70vw] flex flex-col items-start gap-5">
        <p className="font-Alata tracking-widest">PROJECTS</p>
        <p className="text-base tracking-normal text-gray-500 font-semibold">
          Here are some of my selected projects worth sharing.
        </p>
        {/* Header Row */}
        <div className="w-full border-b-2">
          <div className="flex justify-between py-4">
            <span className="font-semibold">Description</span>
            <span className="font-semibold pr-5">Category</span>
          </div>
        </div>
        {/* Project Rows */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex justify-between items-start w-full border-b-2 py-7"
          >
            <div className="flex flex-col flex-1 gap-2">
              <LinkPreview
                text={project.text}
                previewContent={project.previewContent}
                linkUrl={project.linkUrl}
                aria-label={`Link to ${project.text}`} // Accessibility
              />
              <span className="text-xl max-xl:text-base">
                {project.description || "No description available"}
              </span>
            </div>
            <p className="text-lg max-xl:text-base text-gray-400">
              {project.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
