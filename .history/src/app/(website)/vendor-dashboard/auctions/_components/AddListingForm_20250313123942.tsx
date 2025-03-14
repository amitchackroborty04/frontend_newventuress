"use client"
import React, { type SetStateAction, useEffect, useState, type Dispatch } from "react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputWithTags } from "@/components/ui/input-with-tags"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import ProductGallery from "@/components/shared/imageUpload/ProductGallery"
import { useSession } from "next-auth/react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "sonner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  shortDescription: z.string(),
  description: z.string(),
  productType: z.string().min(1, "Industry is required"),
  category: z.string().min(1, "Category is required"),
  subCategory: z.string().optional(),
  regularPrice: z.string().min(1, "Regular price is required"),
  selllingPrice: z.string().optional(),
  quantity: z.string().min(1, "Quantity is required"),
  tags: z.array(z.string()).optional(),
  thc: z.string().optional(),
  cbd: z.string().optional(),
  coa: z.boolean().default(false),
  photos: z.array(z.any()).optional(),
  coaCertificate: z.any().optional(),
})

interface Props {
  setShowAddAuction: Dispatch<SetStateAction<boolean>>
}

function AddListingForm({ setShowAddAuction }: Props) {
  const [images, setImages] = useState<File[]>([])
  const [coaCertificate, setCoaCertificate] = useState<File | null>(null)
  const [formValues, setFormValues] = useState({})
  const [selectedIndustry, setSelectedIndustry] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [categories, setCategories] = useState<any[]>([])
  const [subCategories, setSubCategories] = useState<any[]>([])


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      shortDescription: "",
      description: "",
      productType: "",
      category: "",
      subCategory: "",
      regularPrice: "",
      selllingPrice: "",
      quantity: "",
      tags: [],
      thc: "",
      cbd: "",
      coa: false,
      photos: [],
      coaCertificate: null,
    },
  })

  const [tags, setTags] = React.useState<string[]>([])

  useEffect(() => {
    form.setValue("tags", tags)
    form.trigger("tags")
    form.setValue(
      "photos",
      images.map((image) => image.name),
    )
  }, [tags, form, images])

  const handleImageChange = (images: File[]) => {
    setImages(images)
    setFormValues({ ...formValues, images })
  }

  const handleCoaImageChange = (image: File) => {
    setCoaCertificate(image)
    setFormValues({ ...formValues, coaCertificate: image })
  }

  const session = useSession()
  const token = session.data?.user.token

  // Fetch categories based on selected industry
  const { data: categoriesData, refetch: refetchCategories } = useQuery({
    queryKey: ["categories", selectedIndustry],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?industry=${selectedIndustry}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json()),
    enabled: !!selectedIndustry && !!token,
  })

  // Fetch subcategories based on selected category
  const { data: subCategoriesData, refetch: refetchSubCategories } = useQuery({
    queryKey: ["subcategories", selectedCategory],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subcategories/${selectedCategory}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json()),
    enabled: !!selectedCategory && !!token,
  })

  useEffect(() => {
    if (categoriesData?.data) {
      setCategories(categoriesData.data)
    }
  }, [categoriesData])

  useEffect(() => {
    if (subCategoriesData?.data) {
      setSubCategories(subCategoriesData.data)
    }
  }, [subCategoriesData])

  useEffect(() => {
    if (selectedIndustry) {
      refetchCategories()
      form.setValue("category", "")
      form.setValue("subCategory", "")
      setSelectedCategory("")
    }
  }, [selectedIndustry, refetchCategories, form])

  useEffect(() => {
    if (selectedCategory) {
      refetchSubCategories()
      form.setValue("subCategory", "")
    }
  }, [selectedCategory, refetchSubCategories, form])

  // Check if THC and CBD inputs should be disabled
  const shouldDisableThcCbd = () => {
    const categoryName = categories.find((cat) => cat.id === selectedCategory)?.name
    return categoryName === "Accessories" || categoryName === "Apparel"
  }

  const { mutate } = useMutation<any, unknown, FormData>({
    mutationKey: ["add-auction"],
    mutationFn: (formData) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }).then((res) => res.json()),

    onSuccess: (formData) => {
      if (formData.status === false) {
        toast.error(formData.message, {
          position: "top-right",
          richColors: true,
        })
        return
      }
      form.reset()
      toast.success(formData.message, {
        position: "top-right",
        richColors: true,
      })
      setShowAddAuction(false)
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const formData = new FormData()
    formData.append("title", data.title)
    formData.append("shortDescription", data.shortDescription)
    formData.append("description", data.description)
    formData.append("productType", data.productType)
    formData.append("category", data.category)
    formData.append("subCategory", data.subCategory || "")
    formData.append("regularPrice", data.regularPrice)
    formData.append("selllingPrice", data.selllingPrice || "")
    formData.append("quantity", data.quantity)
    formData.append("tags", JSON.stringify(data.tags))
    formData.append("thc", data.thc || "")
    formData.append("cbd", data.cbd || "")
    formData.append("coa", data.coa.toString())

    if (images.length > 0) {
      images.forEach((image) => {
        formData.append("photos", image)
      })
    }

    if (data.coa && coaCertificate) {
      formData.append("coaCertificate", coaCertificate)
    }

    // Log the complete FormData to see all entries including files
    // console.log("Form data being submitted:")
    // for (const pair of formData.entries()) {
    //   console.log(pair[0], pair[1])
    // }

    // Log the original data object for reference
    console.log("Original form data:", data)
    console.log("Images array:", images)
    console.log("COA Certificate:", coaCertificate)
    mutate(formData)
  }

  return (
    <section className="pb-[60px]">
      <div className="bg-white rounded-[24px] p-[32px]">
        <div
          className={
            "bg-primary dark:bg-pinkGradient px-4 py-3 mb- rounded-t-3xl text-white text-[32px] leading-[38px] font-semibold h-[78px] flex items-center"
          }
        >
          Add Auction Product
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
                      <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                        Title<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder=""
                          type="text"
                          className="py-6 border-[1px] border-[#B0B0B0] dark:!text-black text-[16px]"
                          {...field}
                        />
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
                      <FormLabel className="leading-[19.2px] text-[#9C9C9C] text-[16px] font-medium">
                        Short Description
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type Short Description Here"
                          className="py-3 resize-none border-[#9E9E9E] dark:!text-black"
                          rows={2}
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
                      <FormLabel className="leading-[19.2px] text-[#9C9C9C] text-[16px] font-medium">
                        Description
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type Full Description Here"
                          className="py-3 resize-none border-[#9E9E9E] dark:!text-black"
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="productType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="leading-[19.2px] text-[#9C9C9C] text-[16px] font-medium">
                        Industry Type<span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value)
                          setSelectedIndustry(value)
                        }}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-[51px] border-[#9C9C9C] dark:!text-black">
                            <SelectValue placeholder="Select Industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="recreational">RECREATIONAL CANNABIS</SelectItem>
                          <SelectItem value="cbd">HEMP/CBD</SelectItem>
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
                      <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                        Category<span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value)
                          setSelectedCategory(value)
                        }}
                        value={field.value}
                        disabled={!selectedIndustry}
                      >
                        <FormControl>
                          <SelectTrigger className="h-[51px] border-[#9C9C9C] dark:!text-black">
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category._id} value={category._id}>
                              {category.categoryName}
                            </SelectItem>
                          ))}
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
                      <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                        Sub Category
                      </FormLabel>
                      <Select onValueChange={field.onChange} value={field.value} disabled={!selectedCategory}>
                        <FormControl>
                          <SelectTrigger className="h-[51px] border-[#9C9C9C] dark:!text-black">
                            <SelectValue placeholder="Select Sub Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {subCategories.map((subCategory) => (
                            <SelectItem key={subCategory._id} value={subCategory._id}>
                              {subCategory.subCategoryName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-6">
                    <FormField
                      control={form.control}
                      name="regularPrice"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                            Regular Price<span className="text-red-500">*</span>
                          </FormLabel>
                          <div className="flex justify-between mt-2 w-full whitespace-nowrap rounded-md border border-solid border-[#B0B0B0] h-[51px]">
                            <div className="gap-3 self-stretch px-4 dark:!text-[#6841A5] text-sm font-semibold leading-tight text-[#0057A8] dark:bg-[#482D721A] bg-gray-200 rounded-l-lg h-[49px] w-[42px] flex items-center justify-center">
                              $
                            </div>
                            <FormControl>
                              <Input
                                placeholder="0.00"
                                type="number"
                                className="flex-1 shrink gap-2 self-stretch py-3 pr-5 pl-4 my-auto text-base leading-snug rounded-lg min-w-[100px] border-none h-[50px] dark:!text-black"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-6">
                    <FormField
                      control={form.control}
                      name="selllingPrice"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                            Sell Price
                          </FormLabel>
                          <div className="flex justify-between mt-2 w-full whitespace-nowrap rounded-md border border-solid border-[#B0B0B0] h-[51px]">
                            <div className="gap-3 self-stretch px-4 dark:!text-[#6841A5] text-sm font-semibold leading-tight text-[#0057A8] dark:bg-[#482D721A] bg-gray-200 rounded-l-lg h-[49px] w-[42px] flex items-center justify-center">
                              $
                            </div>
                            <FormControl>
                              <Input
                                placeholder="0.00"
                                type="number"
                                className="flex-1 shrink gap-2 self-stretch py-3 pr-5 pl-4 my-auto text-base leading-snug rounded-lg min-w-[100px] border-none h-[50px] dark:!text-black"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                        Quantity<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="123"
                          type="number"
                          className="h-[51px] border-[#9C9C9C] dark:!text-black"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              { !(selectedCategory === "67d1b9ecf2ed66e4a542fe5e" || selectedCategory === "67d1ba16f2ed66e4a542fe7b") ? (
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-6">
                    <FormField
                      control={form.control}
                      name="thc"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                            THC
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="0.0"
                              type="number"
                              step="0.1"
                              className="h-[51px] border-[#9C9C9C] dark:!text-black"
                              disabled={shouldDisableThcCbd()}
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
                      name="cbd"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                            CBD
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="0.0"
                              type="number"
                              step="0.1"
                              className="h-[51px] border-[#9C9C9C] dark:!text-black"
                              disabled={shouldDisableThcCbd()}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                </div>
              ) : null
              }

                <div className="mt-3">
                  <InputWithTags placeholder="Add Tags" limit={10} tags={tags} setTags={setTags} />
                </div>

                <FormField
                  control={form.control}
                  name="coa"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-4">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal text-[#444444]">
                          Certificate of Analysis (COA)
                        </FormLabel>
                        <p className="text-xs text-muted-foreground">Upload a COA document for this product</p>
                      </div>
                    </FormItem>
                  )}
                />

                {form.watch("coa") && (
                  <div className="border border-dashed border-[#9C9C9C] p-4 rounded-md">
                    <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                      Upload COA Document
                    </FormLabel>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleCoaImageChange(e.target.files[0])
                        }
                      }}
                      className="mt-2"
                    />
                  </div>
                )}

                {/* <FormField
                  control={form.control}
                  name="makeAnOfferCheck"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-4">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal text-[#444444]">
                          Allow users to make an offer
                        </FormLabel>
                        <p className="text-xs text-muted-foreground">
                          Enable this to allow users to make custom offers
                        </p>
                      </div>
                    </FormItem>
                  )}
                /> */}

                {/* {form.watch("makeAnOfferCheck") && (
                  <FormField
                    control={form.control}
                    name="makeAnOfferValue"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="leading-[19.2px] text-[#444444] text-[16px] font-normal">
                          Minimum Offer Value
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
                      </FormItem>
                    )}
                  />
                )} */}
              </div>
              <div className="w-[600px] h-full mt-[16px] border border-[#B0B0B0] rounded-lg">
                <ProductGallery onImageChange={handleImageChange} />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button type="submit" className="py-[12px] px-[24px]">
                Confirm
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  )
}

export default AddListingForm

