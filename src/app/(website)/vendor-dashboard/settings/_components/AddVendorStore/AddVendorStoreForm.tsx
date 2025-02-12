"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useState } from "react"
import { ImagePlus, X } from "lucide-react"

const formSchema = z.object({
  userName: z.string().min(1, "Store name is required"),
  email: z.string().min(1, "Store name is required"),
  fullName: z.string().min(1, "Store name is required"),

  storeName: z.string().min(1, "Store name is required"),
  storeSlug: z.string().min(1, "Store slug is required"),
  storeEmail: z.string().email("Invalid email address"),
  storePhone: z.string().min(1, "Phone number is required"),
  storeDescription: z.string(),
  storeLogo: z.any().optional(),
  storeBannerType: z.string(),
  storeBanner: z.any().optional(),
  license: z.string(),
})

type FormValues = z.infer<typeof formSchema>

export default function AddVendorStoreForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeBannerType: "static",
      license: "business",
    },
  })

  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [bannerPreview, setBannerPreview] = useState<string | null>(null)

  function onSubmit(data: FormValues) {
    console.log(data)
  }

  const handleDeleteImage = (field: "storeLogo" | "storeBanner") => {
    if (field === "storeLogo") {
      form.setValue("storeLogo", null)
      setLogoPreview(null)
    } else {
      form.setValue("storeBanner", null)
      setBannerPreview(null)
    }
  }

  return (
    <div className="bg-white rounded-[24px] p-[32px]">
      <div
        className={
          "bg-primary dark:bg-pinkGradient px-4 py-3 mb- rounded-t-[24px] text-white text-[32px] leading-[38px] font-semibold h-[78px] flex items-center mb-5"
        }
      >
        Add Vendor Store
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-[#444444] font-normal">
                  User Name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} className="h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] dark:!text-black" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-[#444444] font-normal">
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} className="h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] dark:!text-black" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base text-[#444444] font-normal">
                  Full Name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} className="h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] dark:!text-black" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* General Settings */}
            <div className="space-y-6">
              <h2 className="text-xl font-medium dark:text-gradient-pink">General Settings</h2>

              <FormField
                control={form.control}
                name="storeName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-[#444444] font-normal">
                      Store Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] dark:!text-black" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storeSlug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-[#444444] font-normal">
                      Store Slug <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] dark:!text-black" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storeEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-[#444444] font-normal">
                      Store Email <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="email" {...field} className="h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] dark:!text-black" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storePhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-[#444444] font-normal">
                      Store Phone number <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} className="h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] dark:!text-black" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storeDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-[#444444] font-normal">Short Description about Store</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type Description here"
                        className="min-h-[270px] resize-none border-[#9C9C9C] dark:border-[#B0B0B0] dark:!text-black"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Store Brand Setup */}
            <div className="space-y-6">
              <h2 className="text-xl font-medium dark:text-gradient-pink">Store Brand Setup</h2>

              <FormField
                control={form.control}
                name="storeLogo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-[#444444] font-normal">Store Logo</FormLabel>
                    <FormControl>
                      <div className="border-2 border-dashed border-[#919792] dark:border-[#6841A5] rounded-lg p-6 text-center relative">
                        {logoPreview ? (
                          <div className="relative w-full h-48">
                            <Image
                              src={logoPreview || "/placeholder.svg"}
                              alt="Store Logo Preview"
                              layout="fill"
                              objectFit="contain"
                            />
                            <button
                              type="button"
                              onClick={() => handleDeleteImage("storeLogo")}
                              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <div className="mx-auto w-12 h-12 flex items-center justify-center">
                              <ImagePlus className="w-8 h-8 text-gray-400" />
                            </div>
                            <p className="mt-2 text-sm text-gray-500">Drop your image here, or browse</p>
                            <p className="text-xs text-gray-400">Jpeg, png are allowed</p>
                          </>
                        )}
                        <input
                          type="file"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          accept="image/jpeg,image/png"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              field.onChange(file)
                              setLogoPreview(URL.createObjectURL(file))
                            }
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storeBannerType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-[#444444] font-normal">Store Banner type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl className="h-[51px] border-[#9C9C9C] dark:border-[#B0B0B0] text-[#444444]">
                        <SelectTrigger>
                          <SelectValue className="text-[#444444]" placeholder="Select banner type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="dark:bg-white border-none">
                        <SelectItem className="text-[#444444]"   value="static">Static Image</SelectItem>
                        <SelectItem className="text-[#444444]"  value="slider">Slider</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="storeBanner"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-[#444444] font-normal">Store Banner</FormLabel>
                    <FormControl>
                      <div className="border-2 border-dashed border-[#919792] dark:border-[#6841A5] rounded-lg p-6 text-center relative">
                        {bannerPreview ? (
                          <div className="relative w-full h-48">
                            <Image
                              src={bannerPreview || "/placeholder.svg"}
                              alt="Store Banner Preview"
                              layout="fill"
                              objectFit="contain"
                            />
                            <button
                              type="button"
                              onClick={() => handleDeleteImage("storeBanner")}
                              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <div className="mx-auto w-12 h-12 flex items-center justify-center">
                              <ImagePlus className="w-8 h-8 text-gray-400" />
                            </div>
                            <p className="mt-2 text-sm text-gray-500">Drop your image here, or browse</p>
                            <p className="text-xs text-gray-400">Jpeg, png are allowed</p>
                          </>
                        )}
                        <input
                          type="file"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          accept="image/jpeg,image/png"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              field.onChange(file)
                              setBannerPreview(URL.createObjectURL(file))
                            }
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="license"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-[#444444] font-normal">Choose License</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl className="h-[51px] border-[#9C9C9C]  dark:border-[#B0B0B0] text-[#444444]">
                        <SelectTrigger>
                          <SelectValue placeholder="Select license type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="dark:bg-white border-none">
                        <SelectItem className="text-[#444444]" value="business">Business license</SelectItem>
                        <SelectItem className="text-[#444444]" value="personal">Personal license</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

