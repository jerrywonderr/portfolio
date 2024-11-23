import prepImagePath from "@/lib/utils/prep-image-path";
import Image from "next/image";

const HeadShot = () => {
  return (
    <div>
      <Image
        src={prepImagePath("/assets/headshot.jpeg")}
        width={320}
        height={320}
        className="rounded-full h-32 w-32 mx-auto"
        alt="Headshot image of Jeremiah Joseph jerrywonderr"
        priority
      />
    </div>
  );
};

export default HeadShot;
