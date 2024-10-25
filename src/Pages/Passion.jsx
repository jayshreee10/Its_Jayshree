import TextReveal from "../magic/magicui/text-reveal";
import { myProfile } from "@/Data/MyData";

function Passion() {
  // Destructure the Passion text from the myProfile object
  const { Passion: text } = myProfile;

  return (
    // Main container for the Passion section
    <div className="w-full  flex items-center justify-center bg-black dark:bg-black py-20">
      <span className="w-[85vw] max-md:w-full  ">
        <TextReveal text={text} className="text-center" />
      </span>
    </div>
  );
}

export default Passion;
