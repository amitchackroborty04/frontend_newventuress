"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

// Define Zod Schema
const formSchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters"),
  businessName: z.string().min(2, "Business Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(2, "Country is required"),
  phoneNumber: z.string().optional(),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  instagram: z.string().optional(),
  facebook: z.string().optional(),
  linkedin: z.string().optional(),
  twitter: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      businessName: "",
      email: "",
      country: "",
      phoneNumber: "",
      website: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      twitter: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    console.log("Submitting Form Data:", values)

    try {
      // Prepare social media links array
      const socialMediaLinks = []
      if (values.instagram) socialMediaLinks.push(`https://instagram.com/${values.instagram}`)
      if (values.facebook) socialMediaLinks.push(`https://facebook.com/${values.facebook}`)
      if (values.linkedin) socialMediaLinks.push(`https://linkedin.com/in/${values.linkedin}`)
      if (values.twitter) socialMediaLinks.push(`https://twitter.com/${values.twitter}`)

      const dataToSend = {
        fullName: values.fullName,
        businessName: values.businessName,
        email: values.email,
        country: values.country,
        phoneNumber: values.phoneNumber || "",
        website: values.website || "",
        socialMediaLink: socialMediaLinks,
      }

      console.log("Data Sent to Backend:", dataToSend)

      const response = await fetch(`${process.env.NEXT_PUBLIC_WAITLIST_BACKEND_URL}/api/v1/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })

      console.log("Server Response:", response)

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const result = await response.json()
      console.log("Response Data:", result)

      toast.success("Successfully added to waitlist!", {
        position: "top-right",
        richColors: true
        
      })
      form.reset()
    } catch (error: any) {
      console.error("Submission Error:", error)
      toast.error(error.message || "Failed to submit form", {
        position: "bottom-right",
        richColors: true
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Full Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Business Name */}
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Business Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your business name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email Address <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Country <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Website */}
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://yourwebsite.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Social Media Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "instagram",
                  label: "Instagram",
                  icon: <Instagram className="h-4 w-4 text-muted-foreground" />,
                },
                { name: "facebook", label: "Facebook", icon: <Facebook className="h-4 w-4 text-muted-foreground" /> },
                { name: "linkedin", label: "LinkedIn", icon: <Linkedin className="h-4 w-4 text-muted-foreground" /> },
                { name: "twitter", label: "X (Twitter)", icon: <Twitter className="h-4 w-4 text-muted-foreground" /> },
              ].map((item) => (
                <FormField
                  key={item.name}
                  control={form.control}
                  name={item.name as "instagram" | "facebook" | "linkedin" | "twitter"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{item.label} Handle (Optional)</FormLabel>
                      <div className="flex">
                        <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted">
                          {item.icon}
                        </div>
                        <FormControl>
                          <Input placeholder="yourusername" {...field} className="rounded-l-none" />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full text-white" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Join Waitlist"}
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              By submitting this form, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

