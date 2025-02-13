import Image from "next/image";

interface Props {
  heading: string;
  subheading: string;
}

const SectionHeading = ({ heading, subheading }: Props) => {
  return (
    <div className="my-5  w-full mx-auto">
      <h1 className="text-center text-transparent text-gradient dark:text-gradient-pink heading">
        {" "}
        {heading}{" "}
      </h1>
      <p className="text-center font-medium text-[16px] leading-[19.2px] lg:text-[20px] lg:leading-[20px]  text-gradient text-transparent dark:text-gradient-pink my-2">
        {subheading}
      </p>

      <Image
        className="mx-auto dark:hidden"
        src="/assets/img/Line.png"
        width={80}
        height={80}
        alt="Picture of the author"
      />
      <Image
        className="mx-auto hidden dark:block"
        src="/assets/img/dark-Line.png"
        width={80}
        height={80}
        alt="Picture of the author"
      />
    </div>
  );
};

export default SectionHeading;

// Use it where needed

// <SectionHeading subheading={"Shop By Popular categories"} heading={"Popular categories"} />
