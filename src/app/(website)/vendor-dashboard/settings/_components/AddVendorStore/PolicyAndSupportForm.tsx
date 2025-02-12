"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ImagePlus, Trash2 } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const formSchema = z.object({
  policyTabLabel: z.string(),
  shippingPolicy: z.string(),
  returnPolicy: z.string(),
  cancellationPolicy: z.string(),
  media1: z.any().optional(),
  media2: z.any().optional(),
  customerSupport: z.object({
    phone: z.string(),
    email: z.string().email(),
    address: z.string(),
    country: z.string(),
    province: z.string(),
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function PolicySupportForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerSupport: {},
    },
  })

  function onSubmit(data: FormValues) {
    console.log(data)
  }

  const [supportPreview1, setSupportPreview1] = useState<string | null>(null)
  const [supportPreview2, setSupportPreview2] = useState<string | null>(null)
  return (
    <div className="bg-white rounded-[24px] p-[32px]">
      <div
        className={
          "bg-primary dark:bg-pinkGradient px-4 py-3 mb- rounded-t-[24px] text-white text-[32px] leading-[38px] font-semibold h-[78px] flex items-center mb-5"
        }
      >
        Policy & Support
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Policy Section */}
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="policyTabLabel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Policy Tab Label</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="!h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] text-black dark:!text-black"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shippingPolicy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Shipping Policy</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="resize-none !h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] text-black dark:!text-black"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="returnPolicy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Return Policy</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="resize-none h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] text-black dark:!text-black"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cancellationPolicy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Cancellation policy</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="resize-none h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] text-black dark:!text-black"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Media Upload Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="media1"
              render={() => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Add Media 1</FormLabel>
                  <FormControl>
                    <div className="border-2 border-dashed border-[#919792] dark:!border-[#6841A5] rounded-lg p-6 text-center relative">
                      {supportPreview1 ? (
                        <div className="relative">
                          <Image
                            src={supportPreview1 || "/placeholder.svg"}
                            alt="Support Preview 1"
                            width={100}
                            height={80}
                            className="mx-auto w-32 h-32 object-cover rounded-md"
                          />
                          <button
                            type="button"
                            onClick={() => setSupportPreview1(null)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="mx-auto w-12 h-12 flex items-center justify-center">
                            <ImagePlus className="w-8 h-8 text-gray-400" />
                          </div>
                          <p className="mt-2 text-sm text-gray-500">Drop your image here, or browse</p>
                          <p className="text-xs text-gray-400">Jpeg, png are allowed</p>
                          <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            accept="image/jpeg,image/png"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) {
                                setSupportPreview1(URL.createObjectURL(file))
                              }
                            }}
                          />
                        </>
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="media2"
              render={() => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Add Media 2</FormLabel>
                  <FormControl>
                    <div className="border-2 border-dashed border-[#919792] dark:!border-[#6841A5] rounded-lg p-6 text-center relative">
                      {supportPreview2 ? (
                        <div className="relative">
                          <Image
                            src={supportPreview2 || "/placeholder.svg"}
                            alt="Support Preview 2"
                            className="mx-auto w-32 h-32 object-cover rounded-md"
                          />
                          <button
                            type="button"
                            onClick={() => setSupportPreview2(null)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="mx-auto w-12 h-12 flex items-center justify-center">
                            <ImagePlus className="w-8 h-8 text-gray-400" />
                          </div>
                          <p className="mt-2 text-sm text-gray-500">Drop your image here, or browse</p>
                          <p className="text-xs text-gray-400">Jpeg, png are allowed</p>
                          <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            accept="image/jpeg,image/png"
                            onChange={(e) => {
                              const file = e.target.files?.[0]
                              if (file) {
                                setSupportPreview2(URL.createObjectURL(file))
                              }
                            }}
                          />
                        </>
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Customer Support Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-gradient dark:text-gradient-pink">Customer Support</h2>

            <FormField
              control={form.control}
              name="customerSupport.phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      {...field}
                      className=" !h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] dark:!text-black"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customerSupport.email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      className=" !h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] dark:!text-black"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customerSupport.address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Address</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="resize-none h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] dark:!text-black"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customerSupport.country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Country</FormLabel>
                  <FormControl>
                    <Input {...field} className=" !h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] dark:!text-black" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customerSupport.province"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Province</FormLabel>
                  <FormControl>
                    <Input {...field} className=" !h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] dark:!text-black" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

