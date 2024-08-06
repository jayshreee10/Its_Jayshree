import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Posts() {
  const navigate = useNavigate();
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
            <div key={index}>
              <p className="text-2xl font-bold text-LayoutPink leading-snug ">
                {value.postTitle}
              </p>
              <p className="text-lg leading-snug tracking-wide my-2">
                {value.postDescription}
              </p>
            </div>
          );
        })}
      </div>
      <p
        className="flex items-center justify-end w-[55vw] my-28 text-lg font-semibold cursor-pointer"
        onClick={() => {
          navigate("/Blog/AllBlog");
        }}
      >
        Read More
        <span className="m-2">
          <FaLongArrowAltRight />
        </span>{" "}
      </p>
    </div>
  );
}

export default Posts;
