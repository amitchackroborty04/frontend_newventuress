import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import * as React from "react";

interface PageHeaderProps {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
}
export function PageHeader({ title, items }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative w-full flex flex-col items-center justify-center bg-black h-[109px] md:h-[300px] animate-moveBackground"
      )}
      style={{
        backgroundImage: `url(/assets/img/heroBg.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        top: 0,
        left: 0,
      }}
    >
      <div className={cn("relative z-10 flex flex-col items-center")}>
        <h1 className="text-[25px] lg:text-4xl font-semibold tracking-tight text-white text-center">
          {title}
        </h1>
        <Breadcrumb>
          <BreadcrumbList className="text-white">
            {/* <BreadcrumbItem>
              <BreadcrumbLink className="text-inherit hover:text-gray-200" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem> */}
            {items.map((item, index) => (
              <React.Fragment key={`fragment-${item.label}-${index}`}>
                {index > 0 && (
                  <BreadcrumbSeparator className="text-white">
                    {">"}
                  </BreadcrumbSeparator>
                )}
                <BreadcrumbItem key={`item-${item.label}-${index}`}>
                  {index === items.length - 1 ? (
                    <BreadcrumbPage className="text-base md:text-lg lg:text-xl leading-[24px] font-normal md:font-medium lg:font-semibold text-white hover:text-gray-200">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      className="text-base md:text-lg lg:text-xl leading-[24px] font-normal md:font-medium lg:font-semibold text-white hover:text-gray-200"
                      href={item.href}
                    >
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
          <div className="flex items-center justify-center py-2">
            {/* <Image
              src="/assets/img/white-line.svg"
              className="w-16"
              alt="arrow"
              width={30}
              height={30}
            /> */}
              <div className="flex gap-1 justify-center ">
            <div className="w-3 h-1 bg-[#E6EEF6] opacity-30 dark:bg-[#C8B9DF]" />
            <div className="w-10 h-1 bg-[#E6EEF6] dark:bg-[#6A41A3]" />
            <div className="w-3 h-1 bg-[#E6EEF6] opacity-30 dark:bg-[#C8B9DF]" />
          </div>
          </div>
        </Breadcrumb>
      </div>
    </div>
  );
}
