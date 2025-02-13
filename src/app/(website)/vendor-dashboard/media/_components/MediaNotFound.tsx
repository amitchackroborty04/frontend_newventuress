import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MediaNotFound = () => {
  return (
    <div className=" w-full h-full">
        <div className="flex flex-col justify-center items-center">
        <Image
          src="/assets/img/not-found.png"
          width={618}
          height={446}
          alt="Not Found"
        />
        <div className="text-[25px] md:text-4xl lg:text-[48px] font-semibold leading-[14px] md:leading-[35px] lg:leading-[57px] text-center text-primary pt-[40px] text-gradient">
          Oops!
        </div>
        <div className="text-[19px] md:text-2xl lg:text-3xl font-semibold leading-[14px] md:leading-[35px] lg:leading-[57px] text-center text-gradient">
          Media not Found
        </div>
        <div className="text-base md:text-xl lg:text-[25px] font-normal leading-[25px] text-[#6D6D6D] pt-[8px] pb-[16px] md:pb-[20px] text-center">
            Ready to Start selling something awesome.
        </div>
        <div className="flex justify-center w-[500px] max-md:w-[343px] h-[48px] mx-auto gap-5">
          <Link href="/" passHref>
            <Button className="text-white px-[24px] py-[12px] w-[273px] text-[16px] font-[500] leading-tight rounded-lg  max-md:px-5">
              Add New Product
            </Button>
          </Link>
          <Link href="/" passHref>
            <Button className=" text-white px-[24px] py-[12px] w-full text-[16px] font-medium leading-tight rounded-lg  max-md:px-5">
              Import <Download/>
            </Button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default MediaNotFound