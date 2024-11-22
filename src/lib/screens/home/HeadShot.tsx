import Image from "next/image";

const HeadShot = () => {
  return (
    <div>
      <Image
        src="/assets/headshot.jpeg"
        width={320}
        height={320}
        className="rounded-full h-32 w-32 mx-auto"
        alt="Headshot image of Jeremiah Joseph jerrywonderr"
      />
    </div>
  );
};

export default HeadShot;
