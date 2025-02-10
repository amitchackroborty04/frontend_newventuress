
import { Check } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { cn } from '@/lib/utils'

interface OrderStatus {
  isComplete: boolean
  date?: string
}

interface OrderStatusState {
  ordered: OrderStatus
  processing: OrderStatus
  shipping: OrderStatus
  delivered: OrderStatus
}

export default function OrderProgress({className}: {className: string}) {
  const orderStatus: OrderStatusState = {
    ordered: {
      isComplete: true
    },
    processing: {
      isComplete: true,
    },
    shipping: {
      isComplete: true,
    },
    delivered: {
      isComplete: false
    }
  }

  let progressValue = 0;
  if (orderStatus.ordered.isComplete) progressValue += 0;
  if (orderStatus.processing.isComplete) progressValue += 33;
  if (orderStatus.shipping.isComplete) progressValue += 33;
  if (orderStatus.delivered.isComplete) progressValue += 34;


  return (
    <div className={cn("relative w-full max-w-[800px] pt-6 mx-auto", className )}>
      {/* Progress Line */}
      <Progress value={progressValue} className="absolute left-0 top-[42px] h-[5px] w-full bg-gray-200 [&>div]:bg-primary dark:[&>div]:bg-pinkGradient" />
      {/* Status Points */}
      <div className="relative flex justify-between">
        {/* Ordered */}
        <div className="flex flex-col items-start">
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
          <p className={`mt-2 text-sm font-medium sm:text-base ${orderStatus.ordered.isComplete ? "text-gradient dark:bg-pinkGradient" : "text-black"} `}>Order received</p>
          
        </div>

        {/* Processing */}
        <div className="flex flex-col items-center -translate-x-10">
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
              <span className="text-gardient dark:text-gradient-pink">2</span>
            )}
          </div>
          <p className={`mt-2 text-sm font-medium sm:text-base ${orderStatus.processing.isComplete ? "text-gradient dark:text-gradient-pink" : "text-black"} `}>
            Processing
          </p>
        </div>

        {/* Shipping */}
        <div className="flex flex-col items-center -translate-x-6">
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
          <p className={`mt-2 text-sm font-medium sm:text-base ${orderStatus.shipping.isComplete ? "text-gradient dark:text-gradient-pink" : "text-black"} `}>
            On the way
          </p>
        </div>

        {/* Delivered */}
        <div className="flex flex-col items-end">
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
          <p className={`mt-2 text-sm font-medium sm:text-base ${orderStatus.delivered.isComplete ? "text-gradient dark:text-gradient-pink" : "text-black"} `}>
            Delivered
          </p>
          <p className="text-xs text-gray-500 sm:text-sm">
            {orderStatus.delivered.date}
          </p>
        </div>
      </div>
    </div>
  )
}

