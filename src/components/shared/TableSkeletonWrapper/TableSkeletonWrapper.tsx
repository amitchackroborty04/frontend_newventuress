import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

interface TableSkeletonWrapperProps {
  width?: string;
  height?: string;
  className?: string;
  count?: number;
}

const TableSkeletonWrapper: React.FC<TableSkeletonWrapperProps> = ({
  width = "100%", 
  height = "120px", 
  className = "", 
  count = 1
}) => {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(count)].map((_, index) => (
        <Skeleton 
          key={index} 
          className={`rounded-lg ${className}`} 
          style={{ width, height }} 
        />
      ))}
    </div>
  );
};

export default TableSkeletonWrapper;
