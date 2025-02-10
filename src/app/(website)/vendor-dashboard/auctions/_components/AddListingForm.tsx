"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  productFormSchema,
  type ProductFormValues,
} from "./product-form-schema";
import ProductGallery from "@/components/shared/imageUpload/ProductGallery";
import React, { useEffect } from "react";
import { InputWithTags } from "@/components/ui/input-with-tags";

export function AddListingForm() {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      title: "",
      shortDescription: "",
      description: "",
      productType: "CBD",
      stockStatus: "In Stock",
      store: "",
      category: "",
      subCategory: "",
      purchasePrice: "",
      sellingPrice: "",
      discountPrice: "",
      sizeKG: "",
      quantity: "",
      sku: "",
      coa: false,
      tags: [],
      images: [],
    },
  });

  const [tags, setTags] = React.useState<string[]>([]);
  useEffect(() => {
    form.setValue("tags", tags); // Update the 'tags' field in the form
    form.trigger("tags");
  }, [tags, form, form.trigger]);
  function onSubmit(data: ProductFormValues) {
    console.log(data);
  }

  return (
  <section className="pb-[60px]">
      <div className="bg-white rounded-[24px] p-[32px]  ">
      <div
        className={
          "bg-primary px-4 py-3 mb- rounded-t-lg text-white text-[32px] leading-[38px] font-semibold h-[78px] flex items-center dark:bg-pinkGradient"
        }
      >
        Add New Product
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex gap-4">
            <div className="w-[58%] space-y-[16px] mt-[16px]">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-[#444444] font-normal dark:text-gradient-pink">
                      Title <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-[51px] border-[1px] border-[#B0B0B0] dark:border-[#6841A5] dark:text-black " />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="shortDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base text-[#444444] font-normal dark:text-gradient-pink">Short Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type Description here"
                        {...field}
                        className=" border-[1px] border-[#B0B0B0] dark:border-[#6841A5]"
                        rows={3}
                      />
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
                    <FormLabel className="text-base text-[#444444] font-normal dark:text-gradient-pink">Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type Description here"
                        {...field}
                        className=" border-[1px] border-[#B0B0B0] dark:border-[#6841A5]"
                        rows={3}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="productType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#444444] font-normal dark:text-gradient-pink">
                        Product Type <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem  value="CBD" />
                            </FormControl>
                            <FormLabel className="font-normal text-base text-[#444444] dark:text-gradient-pink  ">CBD</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Recreational" />
                            </FormControl>
                            <FormLabel className="font-normal text-base text-[#444444] dark:text-gradient-pink">
                              Recreational
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="stockStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#444444] font-normal dark:text-gradient-pink">
                        Stock Status <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="In Stock" />
                            </FormControl>
                            <FormLabel className="font-normal text-base text-[#444444] dark:text-gradient-pink">
                              In Stock
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Out of Stock" />
                            </FormControl>
                            <FormLabel className="font-normal text-base text-[#444444] dark:text-gradient-pink">
                              Out of Stock
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="store"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#444444] font-normal dark:text-gradient-pink">
                        Store <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="h-[51px] border-[1px] border-[#B0B0B0] dark:border-[#6841A5]">
                          <SelectTrigger>
                            <SelectValue placeholder="Select store" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent >
                          <SelectItem  value="store1">Store 1</SelectItem>
                          <SelectItem value="store2">Store 2</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#444444] font-normal dark:text-gradient-pink">
                        Category <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="h-[51px] border-[1px] border-[#B0B0B0] dark:border-[#6841A5]">
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="category1">Category 1</SelectItem>
                          <SelectItem value="category2">Category 2</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subCategory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#444444] font-normal dark:text-gradient-pink">
                        Sub-Category <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="h-[51px] border-[1px] border-[#B0B0B0] dark:border-[#6841A5]">
                          <SelectTrigger>
                            <SelectValue placeholder="Select sub-category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="sub1">Sub-category 1</SelectItem>
                          <SelectItem value="sub2">Sub-category 2</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="purchasePrice"
                  render={({ field }) => (
                    <FormItem className="flex flex-col ">
                      <FormLabel className=" leading-tight text-[#444444] text-[16px] font-normal dark:text-gradient-pink">
                        Starting Price
                      </FormLabel>
                      <div className="flex justify-between mt-2 w-full whitespace-nowrap rounded-md border border-solid border-neutral-400 h-[51px] dark:border-[#6841A5]">
                        <div className="gap-3 self-stretch px-4 text-sm font-semibold leading-tight text-[#0057A8] bg-gray-200 rounded-l-lg h-[49px] w-[42px] flex items-center justify-center">
                          $
                        </div>
                        <FormControl>
                          <Input
                            placeholder="0.00"
                            type="number"
                            className="flex-1 shrink gap-2 self-stretch py-3 pr-5 pl-4 my-auto text-base leading-snug rounded-lg  border-none h-[50px] "
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sellingPrice"
                  render={({ field }) => (
                    <FormItem className="flex flex-col ">
                      <FormLabel className=" leading-tight text-[#444444] text-[16px] font-normal dark:text-gradient-pink">
                        Starting Price
                      </FormLabel>
                      <div className="flex justify-between mt-2 w-full whitespace-nowrap rounded-md border border-solid border-neutral-400 h-[51px] dark:border-[#6841A5]">
                        <div className="gap-3 self-stretch px-4 text-sm font-semibold leading-tight text-[#0057A8] bg-gray-200 rounded-l-lg h-[49px] w-[42px] flex items-center justify-center">
                          $
                        </div>
                        <FormControl>
                          <Input
                            placeholder="0.00"
                            type="number"
                            className="flex-1 shrink gap-2 self-stretch py-3 pr-5 pl-4 my-auto text-base leading-snug rounded-lg  border-none h-[50px] "
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="discountPrice"
                  render={({ field }) => (
                    <FormItem className="flex flex-col ">
                      <FormLabel className=" leading-tight text-[#444444] text-[16px] font-normal dark:text-gradient-pink">
                        Starting Price
                      </FormLabel>
                      <div className="flex justify-between mt-2 w-full whitespace-nowrap rounded-md border border-solid border-neutral-400 h-[51px] dark:border-[#6841A5]">
                        <div className="gap-3 self-stretch px-4 text-sm font-semibold leading-tight text-[#0057A8] bg-gray-200 rounded-l-lg h-[49px] w-[42px] flex items-center justify-center">
                          $
                        </div>
                        <FormControl>
                          <Input
                            placeholder="0.00"
                            type="number"
                            className="flex-1 shrink gap-2 self-stretch py-3 pr-5 pl-4 my-auto text-base leading-snug rounded-lg  border-none h-[50px]"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="sizeKG"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#444444] font-normal dark:text-gradient-pink">Size (KG)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} className="h-[51px] border-[#B0B0B0] dark:border-[#6841A5]"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#444444] font-normal dark:text-gradient-pink">Quantity</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} className="h-[51px] border-[#B0B0B0] dark:border-[#6841A5]"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sku"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#444444] font-normal dark:text-gradient-pink">SKU</FormLabel>
                      <FormControl>
                        <Input placeholder="Fox-0389" {...field} className="h-[51px] border-[#B0B0B0] dark:border-[#6841A5]"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="coa"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center  space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-base text-[#444444] font-normal dark:text-gradient-pink">COA (Certificate Of Authenticity)</FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              
              <div className="mt-3">
                <InputWithTags
                  className=""
                  placeholder="Add Tags"
                  limit={10}
                  tags={tags} // Pass tags
                  setTags={setTags} // Pass setTags
                />
              </div>
            </div>
            
            <div className="w-[600px] h-full mt-[16px] border border-[#9C9C9C] dark:border-[#6841A5] rounded-lg  ">
              <ProductGallery />
            </div>
          </div>
          <div className="flex justify-end ">
            <Button type="submit" className="py-[12px] px-[24px]">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  </section>
  );
}
