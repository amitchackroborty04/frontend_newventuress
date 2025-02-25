import * as z from "zod"

export const productFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  shortDescription: z.string(),
  description: z.string(),
  productType: z.enum(["CBD", "Recreational"]),
  stockStatus: z.enum(["In Stock", "Out of Stock"]),
  store: z.string().min(1, "Store is required"),
  category: z.string().min(1, "Category is required"),
  subCategory: z.string().min(1, "Sub-category is required"),
  purchasePrice: z.string().min(1, "Purchase price is required"),
  sellingPrice: z.string().min(1, "Selling price is required"),
  discountPrice: z.string().optional(),
  sizeKG: z.string(),
  quantity: z.string(),
  sku: z.string(),
  coa: z.boolean().default(false),
  tags: z.array(z.string()),
  images: z.array(z.string()).optional(),
})

export type ProductFormValues = z.infer<typeof productFormSchema>

