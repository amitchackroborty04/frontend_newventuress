"use client"

import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'
import { useMutation } from '@tanstack/react-query'
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { redirect, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'
import CheckIcon from './CheckIcon'

const SuccessPage = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token") ?? null;

    if(!token) redirect("/");

    const { mutate: captureOrder, isPending } = useMutation({
        mutationKey: ["paypal-trans-plan"],
        mutationFn: () =>
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/paypal/capture-order`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
                orderID: token
            }),
          }).then((res) => res.json()),
      
        onSuccess: (data) => {
          if (data.status) {
            return;
          } else {
            toast.error(data.message ?? "Failed to capture order. Please contact us", {
              position: "top-right",
              richColors: true,
            });
          }
        },
      
        onError: (err) => {
          toast.error(err.message, {
            position: "top-right",
            richColors: true,
          });
        },
      });

      useEffect(() => {
        captureOrder()
      }, [captureOrder])

  return (
    <div className="container mt-[80px] min-h-[calc(100vh-180px)] flex flex-col-reverse md:flex-row items-center justify-center md:justify-around max-w-[1000px]">
        <div>
          <div className="flex items-center gap-x-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 0.2,
                  type: "spring",
                  ease: "easeIn",
                },
              }}
            >
              <CheckIcon
                delay={0.2}
                className="h-7 w-7 bg-primary-blue-main rounded-full text-white p-1"
              />
            </motion.div>
            <motion.h1
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 0.2,
                  type: "spring",
                  ease: "easeIn",
                },
              }}
              className="font-inter text-27px font-semibold"
            >
              Payment successful
            </motion.h1>
          </div>
          <div className="max-w-[500px] text-14px text-tourHub-gray mt-4">
            <TextEffect 
              per="word" 
              preset="fade" 
              variants={{}} 
              className="" 
              onAnimationComplete={() => {}}
            >
              Your membership plan has been successfully activated! 🎉 Enjoy exclusive benefits and premium features as part of your plan. A confirmation email with your membership details has been sent to you. Thank you for joining us—welcome aboard! 🚀
            </TextEffect>
          </div>
          <Link href="/">
            <Button className=" mt-6 " disabled={isPending}>
              Back to Home
            </Button>
          </Link>
        </div>
        <motion.div
          initial={{
            scale: 0.9,
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.5,
              type: "tween",
              ease: "easeOut",
            },
          }}
        >
          <Image
            src="/assets/celebration.png"
            alt="celebration"
            width={400}
            height={400}
          />
        </motion.div>
      </div>
  )
}

export default SuccessPage