"use client";
import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputWithTags } from "@/components/ui/input-with-tags";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import ProductGallery from "@/components/shared/imageUpload/ProductGallery";

import { DateTimePicker } from "@/components/ui/datetime-picker";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string(),
  category: z.string().min(1, "Category is required"),
  startingPrice: z.string(),
  startingTime: z.coerce.date().optional(),
  endingTime: z.coerce.date().optional(),
  sku: z.string().optional(),
  stockQuantity: z.string().optional(),
  tags: z.array(z.string()).optional(),
  productType: z.enum(["CBD", "Recreational"]),
   images: z.array(z.string()).optional(),
});

const AddAuctionForm: React.FC = () => {
    const [images, setImages] = useState<File[]>([]);
    const [formValues, setFormValues] = useState({ /* your form values here */ });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      startingPrice: "",
      startingTime: new Date(),
      endingTime: new Date(),
      sku: "",
      stockQuantity: "",
      tags: [],
      productType: "CBD",
      images: [],
    }
  });

  const [tags, setTags] = React.useState<string[]>([]);
  useEffect(
    () => {
      form.setValue("tags", tags); // Update the 'tags' field in the form
      form.trigger("tags");
      form.setValue("images", images.map((image) => image.name));
    },
    [tags, form,images, form.trigger]
  );
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  const handleImageChange = (images: File[]) => {
    setImages(images);
    setFormValues({ ...formValues, images }); // Update the form values
   

  };

  // const [date12, setDate12] = useState<Date | undefined>(undefined);
  const [date24, setDate24] = useState<Date | undefined>(undefined);
  return (
    <section className="pb-[60px]">
      <div className="bg-white rounded-[24px] p-[32px]">
        <div
          className={
            "bg-primary dark:bg-pinkGradient px-4 py-3 mb- rounded-t-3xl text-white text-[32px] leading-[38px] font-semibold h-[78px] flex items-center"
          }
        >
          Add Auction
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-4">
              <div className="w-[58%] space-y-[16px] mt-[16px]">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) =>
                    <FormItem>
                      <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                        Title<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder=""
                          type=""
                          className="py-6 border-[1px] border-[#B0B0B0] dark:!text-black text-[16px]"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) =>
                    <FormItem>
                      <FormLabel className="leading-[19.2px] text-[#9C9C9C] text-[16px] font-medium">
                        Short Description
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type Description Here"
                          className="py-3 resize-none border-[#9E9E9E] dark:!text-black "
                          rows={3}
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>}
                />

                <FormField
                  control={form.control}
                  name="productType"
                  render={({ field }) =>
                    <FormItem>
                      <FormLabel className="leading-[19.2px] text-[#9C9C9C] text-[16px] font-medium">
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
                                className="leading-[19.2px] text-[#9C9C9C] text-[16px] font-medium"
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
                  name="category"
                  render={({ field }) =>
                    <FormItem>
                      <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                        Category<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="py-6 border-[1px] border-[#B0B0B0] text-black text-[16px] dark:!text-black "
                          type=""
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>}
                />

                <FormField
                  control={form.control}
                  name="startingPrice"
                  render={({ field }) =>
                    <FormItem className="flex flex-col ">
                      <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                        Starting Price
                      </FormLabel>
                      <div className="flex justify-between mt-2 w-full whitespace-nowrap rounded-md border border-solid border-[#B0B0B0] h-[51px]">
                        <div className="gap-3 self-stretch px-4 dark:!text-[#6841A5] text-sm font-semibold leading-tight text-[#0057A8] dark:bg-[#482D721A] bg-gray-200 rounded-l-lg h-[49px] w-[42px] flex items-center justify-center">
                          $
                        </div>
                        <FormControl>
                          <Input
                            placeholder="0.00"
                            type="number"
                            className="flex-1 shrink gap-2 self-stretch py-3 pr-5 pl-4 my-auto text-base leading-snug rounded-lg min-w-[240px] border-none h-[50px] dark:!text-black"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>}
                />

                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-6 w-auto">
                    <FormField
                      control={form.control}
                      name="startingTime"
                      render={({}) =>
                        <FormItem>
                          <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                            Starting Time
                          </FormLabel>
                          <FormControl>
                            <DateTimePicker
                              hourCycle={24}
                              value={date24}
                              onChange={setDate24}
                              className=" border-[#B0B0B0] dark:bg-white dark:hover:text-[#C5C5C5] dark:text-[#444444]"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>}
                    />
                  </div>

                  <div className="col-span-6 w-auto">
                    <FormField
                      control={form.control}
                      name="endingTime"
                      render={({}) =>
                        <FormItem>
                          <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                            Ending Time
                          </FormLabel>
                          <FormControl>
                            <DateTimePicker
                              hourCycle={24}
                              value={date24}
                              onChange={setDate24}
                              className=" border-[#B0B0B0] dark:bg-white dark:hover:text-[#C5C5C5] dark:text-[#444444]"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-6">
                    <FormField
                      control={form.control}
                      name="sku"
                      render={({ field }) =>
                        <FormItem>
                          <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                            SKU
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Fox-0369"
                              type="text"
                              className="h-[51px] border-[#9C9C9C] dark:!text-black "
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>}
                    />
                  </div>

                  <div className="col-span-6">
                    <FormField
                      control={form.control}
                      name="stockQuantity"
                      render={({ field }) =>
                        <FormItem>
                          <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                            Stock Quantity
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="123"
                              type="number"
                              className="h-[51px] border-[#9C9C9C] dark:!text-black "
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <InputWithTags
                    placeholder="Add Tags"
                    limit={10}
                    tags={tags} // Pass tags
                    setTags={setTags} // Pass setTags
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="save-info" />
                  <Label
                    htmlFor="save-info"
                    className="text-sm font-normal text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#919792]"
                  >
                    Save this information for faster check-out next time
                  </Label>
                </div>
              </div>
              <div className="w-[600px] h-full mt-[16px] border border-[#B0B0B0] rounded-lg  ">
                <ProductGallery onImageChange={handleImageChange}/>
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="py-[12px] px-[24px]">
              Confirm
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default AddAuctionForm;
