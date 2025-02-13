import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Skeleton } from "./skeleton";

interface SkeletonWrapperProps {
  children: ReactNode;
  isLoading: boolean;
  fullWidth?: boolean;
  className?: string;
}
const SkeletonWrapper: React.FC<SkeletonWrapperProps> = ({
  children,
  isLoading,
  fullWidth = true,
  className,
}) => {
  if (!isLoading) return children;
  return (
    <Skeleton className={cn(fullWidth && "w-full", className)}>
      <div className="opacity-0">{children}</div>
    </Skeleton>
  );
};

export default SkeletonWrapper;
