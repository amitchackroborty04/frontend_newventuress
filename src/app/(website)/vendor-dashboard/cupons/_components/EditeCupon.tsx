"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import { ArrowRight, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
// import Modal from "@/components/shared/modal/modal"

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description cannot be empty" }),
  discountType: z.string().min(1, { message: "Please select a discount type" }),
  amount: z
    .string()
    .min(1, { message: "Amount is required" }),
  store: z.string().min(1, { message: "Please select a store" }),
  startDate: z.string().min(1, { message: "Start date is required" }),
  expireDate: z.string().min(1, { message: "Expiration date is required" }),
  usageLimit: z
    .string()
    .min(1, { message: "Usage limit is required" }),
  product: z.string().min(1, { message: "Please select a product" }),
  couponCode: z.string().min(1, { message: "Coupon code is required" }),
});


interface StoreResponse {
  status: boolean;
  message: string;
  data?: {
    storeID: string;
    storeName: string
  }[]
}
interface ProductResponse {
  status: boolean;
  message: string;
  data?: {
    _id: string;
    title: string
  }[]
}

interface EditCouponProps {
    setIsOpen: (open: boolean) => void;
    userId: string
  }

  type FormValues = z.infer<typeof formSchema>

export default function EditeCupon({ setIsOpen, userId }:EditCouponProps) {
  const [customError, setCustomError] = useState("")
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      discountType: "",
      amount: "",
      startDate: "",
      expireDate: "",
      usageLimit: "",
      couponCode: "",
      product: "",
    },
  })

  const storeId = form.watch("store");

  const {isPending, mutate:createCoupon} = useMutation({
    mutationKey: ["create-coupon"],
    mutationFn: (body: FormValues) => fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/create-coupon`, {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify({
        ...body,
        userID: userId
      })
    }).then((res) => res.json()),
    onSuccess: (data) => {
      if(!data.status) {
        toast.error(data.message ?? "Failed to create coupon", {
          position: "top-right",
          richColors: true
        });
        return;
      }

      // handle success
      toast.success(" Your discount coupon has been created successfully! 🎁 ", {
        position: "top-right",
        richColors: true
      });

      setIsOpen(false)
    },
    onError: (err) => {
      toast.error(err.message ?? "Failed to create coupon", {
        position: "top-right",
        richColors: true
      })
    }
  })


  const { data: storeResponse, isError: isStoreGetError, error: storeError, isLoading: isStoreLoading } = useQuery<StoreResponse>({
    queryKey: ["stores", userId],
    queryFn: async () => fetch(

        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user-all-store/${userId}`).then((res) => res.json())
      
    ,
  });
  const { data: productResponse, isError: isProductError, error: productError, isLoading: isProductLoading } = useQuery<ProductResponse>({
    queryKey: ["store-products", storeId],
    queryFn: async () => fetch(

        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/store-all-product/${storeId}`).then((res) => res.json())
      
    ,
  });

  


  useEffect(() => {

    if(isStoreGetError) {
      toast.error(storeError.message || "Failed to get store information", {
        position: 'top-right',
        richColors: true
      })
      setCustomError(storeError.message || "Failed to get store information")
    }

  }, [isStoreGetError, storeError?.message])
  useEffect(() => {

    if(isProductError) {
      toast.error(productError.message || "Failed to get store information", {
        position: 'top-right',
        richColors: true
      });
      setCustomError(productError.message || "Failed to get store information")
    }

  }, [isProductError, productError?.message])

  useEffect(() => {

    if(productResponse?.data?.length === 0) {
      setCustomError("No Product found on your choosen store. Please publish a product first")
    }

  }, [productResponse])


  function onSubmit(values: z.infer<typeof formSchema>) {
    createCoupon(values)
  }

function onBack ()  {
    setIsOpen(false)
}

const disabled = isProductError || isStoreGetError || isProductLoading || isStoreLoading || isPending
  return (

 <div className="">
     <div className="bg-gray-50 rounded-lg">

      <div className="mx-auto w-[1250px] rounded-lg bg-white shadow-sm">
        <div className="relative mb-6 rounded-t-lg bg-gradient-to-r from-[#1e2875] to-[#3c3c8f] px-[32px] py-[16px] dark:bg-pinkGradient">
          <h1 className="text-2xl font-semibold text-white">Add Coupons</h1>
          <Button
            variant="secondary"
            size="sm"
            className="absolute right-4 top-4 dark:bg-white dark:!text-[#6841A5]"
            onClick={() =>onBack()}
          >
            
            Back to List <ArrowRight className="mr-2 h-4 w-4 dark:!text-[#6841A5]" />
          </Button>
        </div>

        {customError && <div className="px-[32px]">
        <div className="bg-red-100 h-[40px] w-full rounded-lg text-rose-500 font-medium flex items-center px-5 text-[12px]">{customError}</div>
        </div>}
        <ScrollArea className="h-[calc(100vh-240px)]">
        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-[32px] py-[16px]">
            
             <div className="grid gap-6 grid-cols-2">
             <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">
                      Title <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter title" {...field} className="border border-[#B0B0B0] h-[51px] text-black dark:!text-black"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="store"
                render={({ field }) => (
                  <FormItem >
                    <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">
                      Store Location <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select onValueChange={(value) => {
                      field.onChange(value);
                      setCustomError("")
                    }} defaultValue={field.value} disabled={isStoreLoading}>
                      <FormControl>
                        <SelectTrigger className="border border-[#B0B0B0] dark:!text-[#9E9E9E] h-[41px]">
                          <SelectValue placeholder="Select"/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="dark:bg-white dark:border-none">
                        {storeResponse?.data?.map((item) => (
                          <SelectItem key={item.storeID} value={item.storeID}>{item.storeName}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
             </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Type Description here" {...field} className="border border-[#B0B0B0] h-[91px] text-black dark:!text-black"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="discountType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">Discount Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border border-[#B0B0B0] dark:!text-[#9E9E9E] h-[41px]">
                          <SelectValue placeholder="Select discount type"/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="dark:bg-white dark:border-none">
                        <SelectItem value="Percentage">Percentage</SelectItem>
                        <SelectItem value="Price">Price</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">Amount</FormLabel>
                      <FormControl>
                        <Input placeholder="Discout amount" {...field} className="border border-[#B0B0B0] h-[51px] text-black dark:!text-black"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">Start Date</FormLabel>
                      <FormControl>
                        <Input type="datetime-local" {...field} className="border border-[#B0B0B0] h-[51px] dark:!text-[#9E9E9E] text-black"/>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="expireDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">Expire Date</FormLabel>
                      <FormControl>
                        <Input   type="datetime-local" {...field} className="border border-[#B0B0B0] h-[51px] dark:!text-[#9E9E9E]"/>
                        
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

        

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="usageLimit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">Usage Limit</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Enter Limit" {...field} className="border border-[#B0B0B0] h-[51px] text-black dark:!text-black"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="couponCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">Coupon Code</FormLabel>
                      <FormControl>
                        <Input placeholder="Coupon Code" {...field} className="border border-[#B0B0B0] h-[51px] text-black dark:!text-black"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">Product</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border border-[#B0B0B0] dark:!text-[#9E9E9E] h-[41px]">
                          <SelectValue placeholder="Select product"/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="dark:bg-white dark:border-none">
                        {productResponse?.data?.map((item) => (
                          <SelectItem key={item._id} value={item._id}>{item.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              

            

             <div className=" flex justify-end">
             <Button type="submit" className="w-[138px ] bg-[#1e2875] hover:bg-[#3c3c8f]" disabled={disabled}>
                Submit {isPending && <Loader2 className="animate-spin" />}
              </Button>
             </div>
            </form>
          </Form>
        </div>
        </ScrollArea>
      </div>
    </div>
 </div>
  )
}

