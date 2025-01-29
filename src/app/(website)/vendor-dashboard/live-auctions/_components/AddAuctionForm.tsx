"use client";
import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
});

const AddAuctionForm: React.FC = () => {
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
    },
  });

  const [tags, setTags] = React.useState<string[]>([]);
  useEffect(() => {
    form.setValue("tags", tags); // Update the 'tags' field in the form
    form.trigger("tags");
  }, [tags, form, form.trigger]);
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  // const [date12, setDate12] = useState<Date | undefined>(undefined);
  const [date24, setDate24] = useState<Date | undefined>(undefined);
  return (
    <div className="bg-white rounded-[24px] p-[32px]">
      <div
        className={
          "bg-primary px-4 py-3 mb- rounded-t-lg text-white text-[32px] leading-[38px] font-semibold h-[78px] flex items-center"
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
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Title<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type=""
                        className="h-[51px] border-[#9C9C9C]"
                        {...field}
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
                    <FormLabel>Short Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type Description Here"
                        className="resize-none border-[#9C9C9C]"
                        rows={3}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
                control={form.control}
                name="productType"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>
                      Product Type <span className="text-red-500">*</span>
                    </FormLabel>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="cbd"
                          checked={field.value?.includes("CBD")}
                          onChange={(e) => {
                            const value = e.target.checked
                              ? [...field.value, "CBD"]
                              : field.value.filter((v: string) => v !== "CBD");
                            field.onChange(value);
                          }}
                        />
                        <Label htmlFor="cbd">CBD</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="recreational"
                          checked={field.value?.includes("Recreational")}
                          onChange={(e) => {
                            const value = e.target.checked
                              ? [...field.value, "Recreational"]
                              : field.value.filter(
                                  (v: string) => v !== "Recreational"
                                );
                            field.onChange(value);
                          }}
                        />
                        <Label htmlFor="recreational">Recreational</Label>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

<FormField
                  control={form.control}
                  name="productType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Type *</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="CBD" />
                            </FormControl>
                            <FormLabel className="font-normal">CBD</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Recreational" />
                            </FormControl>
                            <FormLabel className="font-normal">
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
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Category<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type=""
                        className="h-[51px] border-[#9C9C9C]"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startingPrice"
                render={({ field }) => (
                  <FormItem className="flex flex-col ">
                    <FormLabel className=" leading-tight text-[#444444] text-[14px] font-semibold">
                      Starting Price
                    </FormLabel>
                    <div className="flex justify-between mt-2 w-full whitespace-nowrap rounded-md border border-solid border-neutral-400 h-[51px]">
                      <div className="gap-3 self-stretch px-4 text-sm font-semibold leading-tight text-[#0057A8] bg-gray-200 rounded-l-lg h-[49px] w-[42px] flex items-center justify-center">
                        $
                      </div>
                      <FormControl>
                        <Input
                          placeholder="0.00"
                          type="number"
                          className="flex-1 shrink gap-2 self-stretch py-3 pr-5 pl-4 my-auto text-base leading-snug rounded-lg min-w-[240px] border-none h-[50px]"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="startingTime"
                    render={({}) => (
                      <FormItem>
                        <FormLabel>Starting Time</FormLabel>
                        <FormControl>
                          <DateTimePicker
                            hourCycle={24}
                            value={date24}
                            onChange={setDate24}
                            className="h-[51px] border-[#9C9C9C]"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="endingTime"
                    render={({}) => (
                      <FormItem>
                        <FormLabel>Ending Time</FormLabel>
                        <FormControl>
                          <DateTimePicker
                            hourCycle={24}
                            value={date24}
                            onChange={setDate24}
                            className="h-[51px] border-[#9C9C9C]"

                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="sku"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SKU</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Fox-0369"
                            type="text"
                            className="h-[51px] border-[#9C9C9C]"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-6">
                  <FormField
                    control={form.control}
                    name="stockQuantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stock Quantity</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="123"
                            type="number"
                            className="h-[51px] border-[#9C9C9C]"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
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
                  className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Save this information for faster check-out next time
                </Label>
              </div>
            </div>
            <div className="w-[600px] h-full mt-[16px] border border-[#9C9C9C] rounded-lg  ">
              <ProductGallery />
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="py-[12px] px-[24px]">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddAuctionForm;
