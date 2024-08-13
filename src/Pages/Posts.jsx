import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { myProfile } from "@/Data/MyData";
function Posts() {
  const navigate = useNavigate();
  const {posts:content} = myProfile
  return (
    <div className="bg-black w-full flex-col flex items-center  text-white py-20">
      <div className="w-[70vw] flex-col flex items-start leading-relaxed py-2">
        <h1 className="text-3xl font-bold tracking-wide my-2">
          Recent Posts
        </h1>
        {content.map((value, index) => {
          return (
            <div key={index} className="tracking-wider">
              <p className="text-3xl font-bold text-LayoutPink my-5 max-sm:text-xl">
                {value.postTitle}
              </p>
              <p className="text-xl tracking-wide max-sm:text-base">
                {value.postDescription}
              </p>
            </div>
          );
        })}
      </div>
      <p
        className="flex items-center justify-end w-[70vw] my-28 text-lg font-semibold cursor-pointer"
        onClick={() => {
          navigate("/Blog/AllBlog");
        }}
      >
        Read More
        <span className="">
          <FaLongArrowAltRight />
        </span>{" "}
      </p>
    </div>
  );
}

export default Posts;
