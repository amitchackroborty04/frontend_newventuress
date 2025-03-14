import { TriangleAlert } from "lucide-react";

interface ErrorContainerProps {
  message: string;
}

const ErrorContainer = ({ message }: ErrorContainerProps) => {
  return (
    <div>
      <div className="w-full h-[200px] bg-gray-50 flex justify-center flex-col items-center">
        <TriangleAlert className="text-red-500" />
        <h3 className="text-black/70 mt-2">{message}</h3>
      </div>
    </div>
  );
};

export default ErrorContainer;
