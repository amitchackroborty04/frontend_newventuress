import { Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface OrderStatus {
  isComplete: boolean;
  date?: string;
}

interface OrderStatusState {
  ordered: OrderStatus;
  processing: OrderStatus;
  shipping: OrderStatus;
  delivered: OrderStatus;
}

export default function OrderProgressMobile() {
  const orderStatus: OrderStatusState = {
    ordered: {
      isComplete: true,
    },
    processing: {
      isComplete: true,
    },
    shipping: {
      isComplete: true,
    },
    delivered: {
      isComplete: false,
    },
  };

  let progressValue = 0;
  if (orderStatus.ordered.isComplete) progressValue += 0;
  if (orderStatus.processing.isComplete) progressValue += 35;
  if (orderStatus.shipping.isComplete) progressValue += 33;
  if (orderStatus.delivered.isComplete) progressValue += 34;

  return (
    <div className="relative w-full pt-6">
      {/* Progress Line */}
      <Progress
        value={progressValue}
        className="absolute left-0 top-10 h-[370px] translate-x-[17px] w-[5px] bg-gray-200 [&>div]:bg-primary dark:[&>div]:bg-pinkGradient"
        orientation="vertical"
      />
      {/* Status Points */}
      <div className="relative flex flex-col space-y-20 mt-4">
        {/* Ordered */}
        <div className="flex items-center space-x-4">
          <div
            className={`flex h-[40px] w-[40px] items-center justify-center rounded-full ${
              orderStatus.ordered.isComplete
                ? "bg-primary dark:bg-pinkGradient"
                : "bg-white border border-[#0f283f] dark:border-[#6841A5] border-dashed"
            }`}
          >
            {orderStatus.ordered.isComplete && (
              <Check className="h-5 w-5 text-white" />
            )}
          </div>
          <p
            className={`text-sm font-medium ${
              orderStatus.ordered.isComplete ? "text-gradient dark:text-gradient-pink" : "text-black"
            }`}
          >
            Order received
          </p>
        </div>

        {/* Processing */}
        <div className="flex items-center space-x-4">
          <div
            className={`flex h-[40px] w-[40px] items-center justify-center rounded-full ${
              orderStatus.processing.isComplete
                ? "bg-primary dark:bg-pinkGradient"
                : "bg-white border border-[#0f283f] dark:border-[#6841A5] border-dashed"
            }`}
          >
            {orderStatus.processing.isComplete ? (
              <Check className="h-5 w-5 text-white" />
            ) : (
              <span className="text-gradient dark:text-gradient-pink">2</span>
            )}
          </div>
          <p
            className={`text-sm font-medium ${
              orderStatus.processing.isComplete
                ? "text-gradient dark:text-gradient-pink"
                : "text-black dark:text-gradient-pink"
            }`}
          >
            Processing
          </p>
        </div>

        {/* Shipping */}
        <div className="flex items-center space-x-4">
          <div
            className={`flex h-[40px] w-[40px] items-center justify-center rounded-full ${
              orderStatus.shipping.isComplete
                ? "bg-primary dark:bg-pinkGradient"
                : "bg-white border border-[#0f283f] dark:border-[#6841A5] border-dashed"
            }`}
          >
            {orderStatus.shipping.isComplete ? (
              <Check className="h-5 w-5 text-white" />
            ) : (
              <span className="text-gradient dark:text-gradient-pink">3</span>
            )}
          </div>
          <p
            className={`text-sm font-medium ${
              orderStatus.shipping.isComplete ? "text-gradient dark:text-gradient-pink" : "text-black"
            }`}
          >
            On the way
          </p>
        </div>

        {/* Delivered */}
        <div className="flex items-center space-x-4">
          <div
            className={`flex h-[40px] w-[40px] items-center justify-center rounded-full ${
              orderStatus.delivered.isComplete
                ? "bg-primary dark:bg-pinkGradient"
                : "bg-white border border-[#0f283f] dark:border-[#6841A5] border-dashed"
            }`}
          >
            {orderStatus.delivered.isComplete ? (
              <Check className="h-5 w-5 text-white" />
            ) : (
              <span className="text-gradient dark:text-gradient-pink">4</span>
            )}
          </div>
          <div className="flex flex-col">
            <p
              className={`text-sm font-medium ${
                orderStatus.delivered.isComplete
                  ? "text-gradient dark:text-gradient-pink"
                  : "text-black"
              }`}
            >
              Delivered
            </p>
            <p className="text-xs text-gray-500">
              {orderStatus.delivered.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
