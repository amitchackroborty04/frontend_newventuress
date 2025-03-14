"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  billing: z.object({
    name: z.string().min(1, "Name is required"),
    address: z.string().min(1, "Address is required"),
    country: z.string().min(1, "Country is required"),
    province: z.string().min(1, "Province is required"),
  }),
  shipping: z.object({
    name: z.string().min(1, "Name is required"),
    address: z.string().min(1, "Address is required"),
    country: z.string().min(1, "Country is required"),
    province: z.string().min(1, "Province is required"),
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function AddressForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      billing: {
        name: "",
        address: "",
        country: "",
        province: "",
      },
      shipping: {
        name: "",
        address: "",
        country: "",
        province: "",
      },
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
  <div className="pb-[60px]">
      <div className="bg-white rounded-[24px] p-[32px]">
      <div className="bg-primary dark:bg-pinkGradient px-4 py-3 mb- rounded-t-[24px] text-white text-[32px] leading-[38px] font-semibold h-[78px] flex items-center mb-5">
        Address
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Billing Section */}
          <div className="space-y-6">
            <h2 className="text-[22px] text-gradient dark:text-gradient-pink font-medium">Billing</h2>

            <FormField
              control={form.control}
              name="billing.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="!h-[51px] border-[#9E9E9E] dark:border-[#9E9E9E] text-black dark:!text-black" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="billing.address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Address</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="h-[51px] border-[#9E9E9E] dark:border-[#9E9E9E] text-black dark:!text-black" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="billing.country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Country</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="h-[51px] border-[#9E9E9E] dark:border-[#9E9E9E] text-black dark:!text-black" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="billing.province"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Province</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="h-[51px] border-[#9E9E9E] dark:border-[#9E9E9E] text-black dark:!text-black" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Shipping Section */}
          <div className="space-y-6">
            <h2 className="text-[22px] text-gradient dark:text-gradient-pink font-medium">Shipping</h2>

            <FormField
              control={form.control}
              name="shipping.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="!h-[51px] border-[#9E9E9E] dark:border-[#9E9E9E] text-black dark:!text-black" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shipping.address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Address</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="!h-[51px] border-[#9E9E9E] dark:border-[#9E9E9E] text-black dark:!text-black" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shipping.country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Country</FormLabel>
                  <FormControl>
                    <Input {...field} className="!h-[51px] border-[#9E9E9E] dark:border-[#9E9E9E] text-black dark:!text-black" />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shipping.province"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-[#444444] font-medium">Province</FormLabel>
                  <FormControl>
                    <Input {...field} className="!h-[51px] border-[#9E9E9E] dark:border-[#9E9E9E] text-black dark:!text-black" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="bg-primary">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  </div>
  );
}
