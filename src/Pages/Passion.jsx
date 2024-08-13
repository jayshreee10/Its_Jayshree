import TextReveal from "../magic/magicui/text-reveal";
import { myProfile } from "@/Data/MyData";

function Passion() {
  // Destructure the Passion text from the myProfile object
  const { Passion: text } = myProfile;

  return (
    // Main container for the Passion section
    <div className="w-full flex items-center justify-center bg-black dark:bg-black py-20">
      {/* Wrapper for the text reveal component with responsive width */}
      <span className="w-[85vw] max-md:w-full font-Rubik">
        {/* Text reveal effect for the Passion text */}
        <TextReveal text={text} />
      </span>
    </div>
  );
}

export default Passion;
