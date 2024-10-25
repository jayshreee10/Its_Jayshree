import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { myProfile } from "@/Data/MyData";
function Posts() {
  const navigate = useNavigate();
  const { posts: content } = myProfile;
  return (
    <div className="bg-black w-full flex-col flex items-center text-center text-white py-20 font-Mukta">
      <div className="w-[70vw] max-md:w-[80vw] flex-col flex  leading-relaxed py-2">
        <h1 className="text-5xl max-sm:text-4xl font-Alata font-bold tracking-wide lg:my-5 max-sm">
          Recent Posts
        </h1>
        {content.map((value, index) => {
          return (
            <div key={index} className="tracking-wider">
              <p className="text-2xl font-semibold text-LayoutPink my-10 max-sm:text-2xl ">
                {value.postTitle}
              </p>
              <p className="text-lg tracking-wide max-sm:text-base">
                {value.postDescription}
              </p>
            </div>
          );
        })}
      </div>
      <p
        className="flex items-center justify-end w-[80vw] my-28 text-lg font-semibold cursor-pointer"
        onClick={() => {
          navigate("/Blog/AllBlog");
        }}
      >
        Read More
        <span className="ml-2">
          <FaLongArrowAltRight />
        </span>{" "}
      </p>
    </div>
  );
}

export default Posts;
