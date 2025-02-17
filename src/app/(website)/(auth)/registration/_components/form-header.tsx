interface Props {
  label: string;
  paragraph: string;
  title: string;
}

const FormHeader = ({ label, paragraph, title }: Props) => {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-[36px] font-semibold text-gradient dark:text-gradient-pink !leading-[43px] mb-2">
          {label}
        </h1>
        <p className="text-[12px] text-[#6D6D6D] font-normal max-w-[70%] mx-auto">{paragraph}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-[20px] lg:text-[30px] font-medium text-[#000000] mb-[32px]">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default FormHeader;
