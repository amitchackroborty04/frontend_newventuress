"use client";

import { PageHeader } from "@/components/shared/sections/page-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  //   reset: () => void;
}) {
  return (
    <div>
      <PageHeader title="Error Page" items={[]} />
      <div className="flex flex-col justify-center items-center py-[40px] md:py-[60px] lg:py-[80px]">
        <Image
          src="/assets/img/error.png"
          width={729}
          height={486}
          alt="404 Page Not Found"
        />
        <div className="text-[25px] md:text-4xl lg:text-[48px] font-semibold leading-[30px] md:leading-[45px] lg:leading-[57px] text-center text-[#121D42] pt-[40px]">
          Oops!
        </div>
        <div className="text-[19px] md:text-2xl lg:text-3xl font-semibold leading-[19px] md:leading-[45px] lg:leading-[67px] text-center text-[#152764] dark:text-gradient-pink">
          {error.name}
        </div>
        <div className="text-base md:text-xl lg:text-[25px] font-normal leading-[30px] text-[#6D6D6D] pt-[8px] pb-[16px] md:pb-[20px] text-center">
          {error.message}
        </div>
        <div className="flex flex-col self-center max-w-full w-[500px] max-md:w-[343px] h-[56px] mx-auto">
          <Link href="/" passHref>
            <Button className="bg-gradient-to-r from-[#121D42] via-[#152764] to-[#4857BD] text-white hover:bg-[#121D42] px-[105px] py-[18px] w-full text-base font-medium leading-tight rounded-lg min-h-[56px] max-md:px-5">
              Go To Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
