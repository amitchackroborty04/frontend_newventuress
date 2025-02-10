"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ImagePlus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { DemoTableItemsType } from "@/data/StoreListData";

const formSchema = z.object({
  storeName: z.string().min(2, "Store name is required"),
  storeSlug: z.string().min(2, "Store slug is required"),
  storeEmail: z.string().email("Invalid email address"),
  storePhone: z.string().min(10, "Phone number is required"),
  storeDetails: z.string().min(10, "Store details are required"),
  licenseType: z.string().min(1, "Please select a license type"),
  licenseNumber: z.string().min(1, "License number is required"),
})

interface OrderDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  rowData: DemoTableItemsType | null;
}

export default function StoreEditInfo({ isOpen, onClose }: OrderDetailsProps)  {
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const [bannerPreview, setBannerPreview] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeName: "Island Guy Smokes",
      storeSlug: "#53863",
      storeEmail: "alinaulgi@gmail.com",
      storePhone: "+68 0036856365",
      storeDetails:
        "Welcome to Island Guys Smoke, where we bring you the best in Flower Cannabis. Our mission is to provide high-quality, affordable, and curated products that cater to we strive to build a community of happy customers by offering not just products, but solutions. Whether you're looking to your trusted source for high-quality cannabis",
      licenseType: "business",
      licenseNumber: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "logo" | "banner") => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (type === "logo") {
          setLogoPreview(reader.result as string)
        } else {
          setBannerPreview(reader.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = (type: "logo" | "banner") => {
    if (type === "logo") {
      setLogoPreview(null)
    } else {
      setBannerPreview(null)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()} >
      
        <DialogContent
          className="max-w-[1350px] p-0 dark:bg-white dark:border-none"
          style={{ boxShadow: "0px 0px 22px 8px #C1C9E4" }}
        >
    <div className="">
      <div className="">
      <div
        className={
          "bg-primary dark:bg-pinkGradient pl-[30px] py-3 mb- rounded-t-lg text-white text-[32px] leading-[38px] font-semibold h-[78px] flex items-center "
        }
      >
       Edit Store Info
      </div>
        <div className=" rounded-b-lg  px-6 pt-[30px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8 ">
                <div className="space-y-6">
                  <h3 className="text-[22px] font-medium text-gradient dark:text-gradient-pink">General Settings</h3>

                  <FormField
                    control={form.control}
                    name="storeName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base text-[#444444] dark:text-[#444444] text-normal leading-[19.2px]" >Store Name  <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input {...field} className="h-[51px] dark:border dark:border-[#B0B0B0] dark:placeholder:text-[#3D3D3D] dark:text-black" />
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
                        <FormLabel className="text-base text-[#444444] dark:text-[#444444] text-normal leading-[19.2px]" >Store Name  <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input {...field} className="h-[51px] dark:border dark:border-[#B0B0B0] dark:placeholder:text-[#3D3D3D] dark:text-black" />
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
                        <FormLabel className="text-base text-[#444444] dark:text-[#444444] text-normal leading-[19.2px]">Store Email  <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input type="email" {...field} className="h-[51px] dark:border dark:border-[#B0B0B0] dark:placeholder:text-[#3D3D3D] dark:text-black"/>
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
                        <FormLabel className="text-base text-[#444444] dark:text-[#444444] text-normal leading-[19.2px]">Store Phone Number <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input type="tel" {...field}  className="h-[51px] dark:border dark:border-[#B0B0B0] dark:placeholder:text-[#3D3D3D] dark:text-black"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="storeDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base text-[#444444] dark:text-[#444444] text-normal leading-[19.2px]">Store Details <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Textarea rows={4} {...field} className="h-[108px] dark:border dark:border-[#B0B0B0] dark:placeholder:text-[#3D3D3D] dark:text-black"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="licenseType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base text-[#444444] dark:text-[#444444] text-normal leading-[19.2px]">Choose License</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className=" dark:border dark:border-[#B0B0B0] dark:text-black">
                              <SelectValue placeholder="Select license type" className="h-[51px]"/>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="dark:bg-white dark:border-none">
                            <SelectItem value="business">Business license</SelectItem>
                            <SelectItem value="retail">Retail license</SelectItem>
                            <SelectItem value="wholesale">Wholesale license</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="licenseNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base text-[#444444] dark:text-[#444444] text-normal leading-[19.2px]">License Number</FormLabel>
                        <FormControl className="h-[51px]">
                          <Input {...field} placeholder="write here..." className="dark:border dark:border-[#B0B0B0] dark:placeholder:text-[#3D3D3D] dark:text-black" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-6">
                  <h3 className="text-[22px] font-medium text-gradient dark:text-gradient-pink">Store Brand Setup</h3>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-base text-[#444444] dark:text-[#444444] text-normal leading-[19.2px]">Store Logo</Label>
                      <div className="mt-2">
                        <div className="border-2 border-dashed dark:border-[#6841A5] rounded-lg p-4">
                          {logoPreview ? (
                            <div className="relative">
                              <Image
                                src={logoPreview || "/placeholder.svg"}
                                alt="Store logo preview"
                                className="max-w-full h-auto rounded"
                              />
                              <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                className="absolute top-2 right-2"
                                onClick={() => removeImage("logo")}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <label className="flex flex-col items-center justify-center py-8 cursor-pointer">
                             <ImagePlus className="w-8 h-8 text-gray-400" />
                              <span className="text-sm text-muted-foreground">
                                Drop your logo here or click to upload
                              </span>
                              <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, "logo")}
                              />
                            </label>
                          )}
                        </div>
                        <div className="flex justify-end gap-2 mt-2">
                          <Button variant="outline" size="sm" className="dark:bg-white dark:text-gradient-pink dark:border dark:border-[#B0B0B0]">
                            Update
                          </Button>
                          <Button size="sm">Confirm</Button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base text-[#444444] dark:text-[#444444] text-normal leading-[19.2px]">Store Banner Type</Label>
                      <Select defaultValue="static">
                        <SelectTrigger className="mt-2 h-[51px] dark:border dark:border-[#B0B0B0] dark:text-black">
                          <SelectValue placeholder="Select banner type"/>
                        </SelectTrigger>
                        <SelectContent className="dark:bg-white dark:border-none">
                          <SelectItem value="static">Static Image</SelectItem>
                          <SelectItem value="animated">Animated</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-base text-[#444444] dark:text-[#444444] text-normal leading-[19.2px]">Store Banner</Label>
                      <div className="mt-2">
                        <div className="border-2 border-dashed dark:border-[#6841A5] rounded-lg p-4">
                          {bannerPreview ? (
                            <div className="relative">
                              <Image
                                src={bannerPreview || "/placeholder.svg"}
                                alt="Store banner preview"
                                className="max-w-full h-auto rounded"
                              />
                              <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                className="absolute top-2 right-2"
                                onClick={() => removeImage("banner")}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <label className="flex flex-col items-center justify-center py-8 cursor-pointer">
                              <ImagePlus className="w-8 h-8 text-gray-400" />
                              <span className="text-sm text-muted-foreground">
                                Drop your banner here or click to upload
                              </span>
                              <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, "banner")}
                              />
                            </label>
                          )}
                        </div>
                        <div className="flex justify-end gap-2 mt-2">
                          <Button variant="outline" size="sm" className="dark:bg-white dark:text-gradient-pink dark:border dark:border-[#B0B0B0]">
                            Update
                          </Button>
                          <Button size="sm">Confirm</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end pb-[56px]">
              <Button type="submit" className=" py-[12px] px-[100px]  ">
                Submit
              </Button>

              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
    </DialogContent>
    </Dialog>
  )
}

