"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
// import Modal from "@/components/shared/modal/modal"

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string(),
  discountType: z.string(),
  amount: z.string(),
  startDate: z.string(),
  expireDate: z.string(),
  emailRestrictions: z.string(),
  usageLimit: z.string(),
  usageLimitPerUser: z.string(),
  product: z.string(),
  category: z.string(),
  subCategory: z.string(),
  saveInfo: z.boolean().default(false),
})

interface EditCouponProps {
    setIsOpen: (open: boolean) => void
  }
export default function EditeCupon({ setIsOpen }:EditCouponProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      discountType: "",
      amount: "",
      startDate: "",
      expireDate: "",
      emailRestrictions: "",
      usageLimit: "",
      usageLimitPerUser: "",
      product: "",
      category: "",
      subCategory: "",
      saveInfo: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsOpen(false)
  }

function onBack ()  {
    setIsOpen(false)
}
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
        <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-[32px] py-[16px]">
            
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">
                      Title <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter title" {...field} className="border border-[#B0B0B0] h-[51px]"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Type Description here" {...field} className="border border-[#B0B0B0] h-[91px]"/>
                    </FormControl>
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
                      <FormControl>
                        <Input placeholder="Percentage discount" {...field} className="border border-[#B0B0B0] h-[51px]"/>
                      </FormControl>
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
                        <Input placeholder="Percentage discount" {...field} className="border border-[#B0B0B0] h-[51px]"/>
                      </FormControl>
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
                        <Input type="date" {...field} className="border border-[#B0B0B0] h-[51px]"/>
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
                        <Input   type="date" {...field} className="border border-[#B0B0B0] h-[51px]"/>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="emailRestrictions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">Email Restrictions</FormLabel>
                    <FormControl>
                      <Input placeholder="Percentage discount" {...field} className="border border-[#B0B0B0] h-[51px]"/>
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="usageLimit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">Usage Limit</FormLabel>
                      <FormControl>
                        <Input placeholder="Percentage discount" {...field} className="border border-[#B0B0B0] h-[51px]"/>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="usageLimitPerUser"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">Usage limit per user</FormLabel>
                      <FormControl>
                        <Input placeholder="Percentage discount" {...field} className="border border-[#B0B0B0] h-[51px]"/>
                      </FormControl>
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
                        <SelectTrigger className="border border-[#B0B0B0] h-[41px]">
                          <SelectValue placeholder="Select product"/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="product1">Product 1</SelectItem>
                        <SelectItem value="product2">Product 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border border-[#B0B0B0] h-[41px]">
                            <SelectValue placeholder="Select category"/>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="category1">Category 1</SelectItem>
                          <SelectItem value="category2">Category 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subCategory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex justify-start text-[#444444] text-[16px] font-normal">Sub-Category</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border border-[#B0B0B0] h-[41px]">
                            <SelectValue placeholder="Select sub-category"/>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="sub1">Sub-Category 1</SelectItem>
                          <SelectItem value="sub2">Sub-Category 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="saveInfo"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-[#919792] text-[12px] font-normal">Save this information for faster Adding Products</FormLabel>
                    </div>
                  </FormItem>
                )}
              />

             <div className=" flex justify-end">
             <Button type="submit" className="w-[138px ] bg-[#1e2875] hover:bg-[#3c3c8f]">
                Submit
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

