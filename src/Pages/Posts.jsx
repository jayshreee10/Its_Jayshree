import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { myProfile } from "@/Data/MyData";
import Button from "@/Components/Button";
import Card from "../Components/Card";
import jayshree from "../assets/jayshree.jpg";

function Posts() {
  const navigate = useNavigate();
  const { posts: content } = myProfile;

  return (
    <div className="w-[70vw] min-h-screen bg-black  flex-col flex items-center justify-evenly gap-10 text-justify text-white py-20 font-Mukta">
      <h4 className="font-Alata text-center text-gray-500 text-3xl tracking-wider uppercase">
        {"My Thoughts and Ideas"}
      </h4>
      <div className=" w-full grid grid-cols-2 gap-5 max-md:w-[80vw] flex-col  leading-relaxed py-2">
        {content.map((post, index) => (
          <Card
            key={index}
            postTitle={post.postTitle}
            postDescription={post.postDescription}
            postlink="/Blog/AllBlog"
            postlinktitle="Read more"
            postimg={post.postimg} // Add `postimg` in your data if available, or remove this prop if not needed
          />
        ))}
      </div>
      <div className="mt-16 w-full flex items-center justify-between border shadow-slate-400 border-gray-700 p-10 rounded-lg">
        <h4 className="text-white font-Alata text-center text-5xl tracking-wider uppercase">
          {"read all my Articles"}
        </h4>

        <div className="mt-[20px]">
          <Button
            onClick={() => {
              navigate("/Blog/AllBlog");
            }}
            text={"Click here"}
          />
        </div>
      </div>
    </div>
  );
}

export default Posts;
