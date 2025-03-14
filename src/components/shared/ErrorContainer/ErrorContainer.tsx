import { TriangleAlert } from "lucide-react";

interface ErrorContainerProps {
  message: string;
  className? : string
}

const ErrorContainer = ({ message, className="" }: ErrorContainerProps) => {
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center bg-[#b4b3b3] rounded-lg">
        <TriangleAlert className="text-red-500" />
        <h3 className={`mt-2 text-black/70 ${className}`}>{message}</h3>
      </div>
  );
};

export default ErrorContainer;