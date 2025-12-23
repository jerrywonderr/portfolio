import prepImagePath from "@/lib/utils/prep-image-path";
import Image from "next/image";

const HeadShot = () => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-xl"></div>
        <Image
          src={prepImagePath("/assets/headshot.jpeg")}
          width={200}
          height={200}
          className="rounded-full h-40 w-40 sm:h-48 sm:w-48 object-cover relative border-4 border-border shadow-lg"
          alt="Jeremiah Joseph - Senior Software Engineer"
          priority
        />
      </div>
    </div>
  );
};

export default HeadShot;
