import React from "react";
function TweetCard({
  postTitle,
  postDescription,
  postlink,
  postlinktitle,
  postimg,
  posticon,
}) {
  return (
    <div className="relative  max-w-2xl p-6 bg-black bg-opacity-40 backdrop-blur-lg rounded-xl border border-LayoutPink shadow-lg">
      <div className="flex items-center space-x-4">
        {posticon || ""}
        <h2 className="text-lg font-semibold text-white">
          {postTitle || "Dillion"}
        </h2>
        <a href={postlink || ""} className="text-gray-400">
          {postlinktitle || "@dillionverma"}
        </a>
      </div>
      <p className="mt-4 text-white">{postDescription || "hello"}</p>
      <div className="mt-6 w-full rounded-lg overflow-hidden border border-gray-700">
        <img src={postimg} alt="Product Preview" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default TweetCard;
