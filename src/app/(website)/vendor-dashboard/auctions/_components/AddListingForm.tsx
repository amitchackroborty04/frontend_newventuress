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
import { Label } from "@/components/ui/label";

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
          "bg-primary px-4 py-3 mb- rounded-t-3xl text-white text-[32px] leading-[38px] font-semibold h-[78px] flex items-center dark:bg-pinkGradient"
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
                    <FormLabel className="text-base text-[#444444] font-normal">
                      Title <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-[51px] border-[1px] border-[#B0B0B0] dark:border-[#B0B0B0] dark:!text-black " />
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
                    <FormLabel className="text-base text-[#444444] font-normal ">Short Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type Description here"
                        {...field}
                        className=" border-[1px] border-[#B0B0B0] dark:border-[#B0B0B0] dark:!text-black"
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
                    <FormLabel className="text-base text-[#444444] font-normal">Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type Description here"
                        {...field}
                        className=" border-[1px] border-[#B0B0B0] dark:border-[#B0B0B0] dark:!text-black"
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
                  render={({ field }) =>
                    <FormItem>
                      <FormLabel className="leading-[19.2px] text-base text-[#444444] font-normal">
                        Product Type<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="space-y-2">
                          {["CBD", "Recreational"].map(type =>
                            <div
                              key={type}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={type}
                                checked={field.value === type}
                                onCheckedChange={checked => {
                                  if (checked) {
                                    field.onChange(type); // Ensures only one checkbox is selected at a time
                                  } else {
                                    field.onChange(""); // Clears the selection
                                  }
                                }}
                                className="h-4 w-4 border-[#C5C5C5]"
                              />
                              <Label
                                htmlFor={type}
                                className="leading-[19.2px] text-base text-[#444444] font-normal"
                              >
                                {type}
                              </Label>
                            </div>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>}
                />

                <FormField
                                  control={form.control}
                                  name="productType"
                                  render={({ field }) =>
                                    <FormItem>
                                      <FormLabel className="leading-[19.2px] text-base text-[#444444] font-normal">
                                      Stock Status <span className="text-red-500">*</span>
                                      </FormLabel>
                                      <FormControl>
                                        <div className="space-y-2">
                                          {["In Stoke", "Out of Stoke"].map(type =>
                                            <div
                                              key={type}
                                              className="flex items-center space-x-2"
                                            >
                                              <Checkbox
                                                id={type}
                                                checked={field.value === type}
                                                onCheckedChange={checked => {
                                                  if (checked) {
                                                    field.onChange(type); // Ensures only one checkbox is selected at a time
                                                  } else {
                                                    field.onChange(""); // Clears the selection
                                                  }
                                                }}
                                                className="h-4 w-4 border-[#C5C5C5]"
                                              />
                                              <Label
                                                htmlFor={type}
                                                className="leading-[19.2px] text-base text-[#444444] font-normal"
                                              >
                                                {type}
                                              </Label>
                                            </div>
                                          )}
                                        </div>
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>}
                                />
              </div>

              <div className="grid grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="store"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#444444] font-normal">
                        Store <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="h-[51px] border-[1px] border-[#B0B0B0] dark:border-[#B0B0B0]">
                          <SelectTrigger className="dark:text-[#444444]">
                            <SelectValue placeholder="Select store" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="dark:bg-white dark:border-none">
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
                      <FormLabel className="text-base text-[#444444] font-normal">
                        Category <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="h-[51px] border-[1px] border-[#B0B0B0] dark:border-[#B0B0B0]">
                          <SelectTrigger className="dark:text-[#444444]">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="dark:bg-white dark:border-none">
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
                      <FormLabel className="text-base text-[#444444] font-normal">
                        Sub-Category <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="h-[51px] border-[1px] border-[#B0B0B0] dark:border-[#B0B0B0]">
                          <SelectTrigger className="dark:text-[#444444]">
                            <SelectValue placeholder="Select sub-category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="dark:bg-white dark:border-none">
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
                      <FormLabel className=" leading-tight text-[#444444] text-[16px] font-normal ">
                        Starting Price
                      </FormLabel>
                      <div className="flex justify-between mt-2 w-full whitespace-nowrap rounded-md border border-solid border-neutral-400 h-[51px] dark:border-[#B0B0B0]">
                        <div className="gap-3 self-stretch dark:bg-[#482D721A] px-4 text-sm font-semibold leading-tight text-[#0057A8] dark:!text-[#6841A5] bg-gray-200 rounded-l-lg h-[49px] w-[42px] flex items-center justify-center">
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
                      <FormLabel className=" leading-tight text-[#444444] text-[16px] font-normal">
                        Starting Price
                      </FormLabel>
                      <div className="flex justify-between mt-2 w-full whitespace-nowrap rounded-md border border-solid border-neutral-400 h-[51px] dark:border-[#B0B0B0]">
                        <div className="gap-3 self-stretch px-4 text-sm font-semibold leading-tight text-[#0057A8] dark:!text-[#6841A5] bg-gray-200 dark:bg-[#482D721A] rounded-l-lg h-[49px] w-[42px] flex items-center justify-center">
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
                      <FormLabel className=" leading-tight text-[#444444] text-[16px] font-normal">
                        Starting Price
                      </FormLabel>
                      <div className="flex justify-between mt-2 w-full whitespace-nowrap rounded-md border border-solid border-neutral-400 h-[51px] dark:border-[#B0B0B0]">
                        <div className="gap-3 self-stretch px-4 text-sm font-semibold leading-tight text-[#0057A8] dark:!text-[#6841A5] dark:bg-[#482D721A] bg-gray-200 rounded-l-lg h-[49px] w-[42px] flex items-center justify-center">
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
                      <FormLabel className="text-base text-[#444444] font-normal">Size (KG)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} className="h-[51px] border-[#B0B0B0] dark:border-[#B0B0B0] dark:!text-[#444444]"/>
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
                      <FormLabel className="text-base text-[#444444] font-normal">Quantity</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} className="h-[51px] border-[#B0B0B0] dark:border-[#B0B0B0] dark:!text-[#444444]"/>
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
                      <FormLabel className="text-base text-[#444444] font-normal">SKU</FormLabel>
                      <FormControl>
                        <Input placeholder="Fox-0389" {...field} className="h-[51px] border-[#B0B0B0] dark:border-[#B0B0B0]"/>
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
                      <FormLabel className="text-base text-[#444444] font-normal">COA (Certificate Of Authenticity)</FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              
              <div className="mt-3">
                <InputWithTags
                  className="dark:border-[#B0B0B0]"
                  placeholder="Add Tags"
                  limit={10}
                  tags={tags} // Pass tags
                  setTags={setTags} // Pass setTags
                />
              </div>
            </div>
            
            <div className="w-[600px] h-full mt-[16px] border border-[#9C9C9C] dark:border-[#B0B0B0] rounded-lg  ">
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
