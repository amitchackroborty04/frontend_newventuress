"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ImageIcon, Trash2 } from "lucide-react"
import Image from "next/image"

interface SocialMediaData {
  facebook: {
    title: string
    description: string
    image?: File
    imagePreview?: string
  }
  instagram: {
    title: string
    description: string
    image?: File
    imagePreview?: string
  }
  socialProfiles: {
    facebook: string
    twitter: string
    instagram: string
    linkedin: string
  }
}

export default function SocialMediaForm() {
  const [formData, setFormData] = useState<SocialMediaData>({
    facebook: {
      title: "",
      description: "",
    },
    instagram: {
      title: "",
      description: "",
    },
    socialProfiles: {
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Data:", formData)
  }

  const handleInputChange = (section: "facebook" | "instagram" | "socialProfiles", field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
  }

  const handleFileChange = (section: "facebook" | "instagram", e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          image: file,
          imagePreview: URL.createObjectURL(file), // Generate preview URL
        },
      }))
    }
  }

  const handleImageRemove = (section: "facebook" | "instagram") => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        image: undefined,
        imagePreview: undefined,
      },
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Card className="bg-white pt-[30px] px-[30px]">
        <div className="bg-primary dark:bg-pinkGradient px-4 py-3 rounded-t-[24px] text-white text-[32px] leading-[38px] font-semibold h-[78px] flex items-center mb-5">
          Social Media Setting
        </div>

        <CardContent className="p-6 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Facebook & Instagram Setup */}
            {["facebook", "instagram"].map((platform) => (
              <div key={platform} className="space-y-4">
                <h2 className="text-[22px] font-semibold text-gradient dark:text-gradient-pink">
                  {platform.charAt(0).toUpperCase() + platform.slice(1)} Setup
                </h2>
                <div className="space-y-2">
                  <Label className="text-base text-[#444444] font-medium" htmlFor={`${platform}-title`}>
                    {platform.charAt(0).toUpperCase() + platform.slice(1)} Title
                  </Label>
                  <Input
                    id={`${platform}-title`}
                    value={formData[platform as "facebook" | "instagram"].title}
                    onChange={(e) => handleInputChange(platform as "facebook" | "instagram", "title", e.target.value)}
                    className="border border-[#9E9E9E] dark:border-[#B0B0B0] !h-[51px] text-black dark:!text-black"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-base text-[#444444] font-medium" htmlFor={`${platform}-description`}>
                    {platform.charAt(0).toUpperCase() + platform.slice(1)} Description
                  </Label>
                  <Textarea
                    id={`${platform}-description`}
                    value={formData[platform as "facebook" | "instagram"].description}
                    onChange={(e) =>
                      handleInputChange(platform as "facebook" | "instagram", "description", e.target.value)
                    }
                    className="border border-[#9E9E9E] dark:border-[#B0B0B0] !h-[51px] text-black dark:!text-black"
                  />
                </div>
                {/* Image Upload Section */}
                <div className="space-y-2">
                  <Label className="text-base text-[#444444] font-medium">{platform} Image</Label>
                  <div className="border-2 border-dashed border-[#919792] dark:border-[#6841A5] rounded-lg p-6 text-center relative">
                    <Input
                      type="file"
                      accept="image/jpeg,image/png"
                      id={`${platform}-image`}
                      onChange={(e) => handleFileChange(platform as "facebook" | "instagram", e)}
                      className="hidden dark:!text-black"
                    />

                    {formData[platform as "facebook" | "instagram"].imagePreview ? (
                      <div className="relative">
                        <Image
                          src={formData[platform as "facebook" | "instagram"].imagePreview || ''}
                          alt={`${platform} preview`}
                          width={80}
                          height={80}
                          className="w-full max-w-[200px] rounded-lg border border-gray-300 mx-auto"
                        />
                        <button
                          type="button"
                          onClick={() => handleImageRemove(platform as "facebook" | "instagram")}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    ) : (
                      <label
                        htmlFor={`${platform}-image`}
                        className="cursor-pointer flex flex-col items-center gap-2 text-gray-500"
                      >
                        <ImageIcon className="h-8 w-8" />
                        <p>Drop your image here, or browse</p>
                        <p className="text-sm">Jpeg, png are allowed</p>
                      </label>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Profiles */}
          <div className="space-y-4">
            <h2 className="text-[22px] font-semibold text-gradient dark:text-gradient-pink">Social Profile</h2>
            <div className="space-y-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
                <div key={platform} className="space-y-2">
                  <Label className="text-base text-[#444444] font-medium capitalize" htmlFor={platform}>
                    {platform}
                  </Label>
                  <Input
                    id={platform}
                    value={formData.socialProfiles[platform as keyof typeof formData.socialProfiles]}
                    onChange={(e) => handleInputChange("socialProfiles", platform, e.target.value)}
                    className="border border-[#9E9E9E] dark:border-[#B0B0B0] !h-[51px] text-black dark:!text-black"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="bg-[#1a237e] hover:bg-[#1a237e]/90">
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
