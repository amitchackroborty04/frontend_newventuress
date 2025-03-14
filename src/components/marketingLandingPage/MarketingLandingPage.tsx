"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRef } from "react"
import { WaitlistForm } from "./wailistform"

export default function WeedFestLanding() {
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen animate-moveBackground bg-cover bg-center" style={{
        backgroundImage: `url(/assets/img/heroBg.png)`,
      }}>
      {/* Add this at the top of the component, right after the imports */}
      <style jsx global>{`
        .clip-path-wave {
          clip-path: polygon(
            0% 0%, 
            12% 5%,
            24% 10%,
            36% 15%,
            48% 5%,
            60% 0%,
            72% 5%,
            84% 10%,
            100% 0%,
            100% 100%,
            0% 100%
          );
        }
      `}</style>
      {/* Enhanced Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Background with multiple layers for depth */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-700 z-0"></div> */}

        {/* Animated cannabis leaf pattern overlay */}
        {/* <div className="absolute inset-0 opacity-10 z-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div> */}

        {/* Light rays effect */}
        {/* <div className="absolute inset-0 bg-gradient-radial from-emerald-500/20 to-transparent opacity-70 z-0"></div> */}

        {/* Content container */}
        <div className="container relative px-4 md:px-6 mx-auto z-10">
          <div className="max-w-4xl mx-auto">
            {/* Decorative element above heading */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-emerald-400 rounded-full"></div>
            </div>

            {/* Main heading with enhanced typography */}
            <h1 className="text-center font-bold tracking-tighter text-white">
              <span className="block text-2xl md:text-4xl mb-2 text-emerald-300">Pacific Rim Fusion</span>
              <span className="block text-[25px] md:text-4xl  mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              We run the rawest Hemp and CBD Auctions—biomass, extracts, isolates, distillates—we are here for you, no fluff. 
              </span>
              {/* <span className="block text-xl md:text-2xl text-emerald-200 mt-4 font-normal">WEED FEST 2025</span> */}
            </h1>

            {/* Decorative divider */}
            <div className="flex items-center justify-center my-8">
              <div className="h-px w-16 bg-emerald-400/50"></div>
              <div className="mx-4">
                <svg
                  className="h-8 w-8 text-emerald-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="h-px w-16 bg-emerald-400/50"></div>
            </div>

            {/* Subheading with improved styling */}
            <p className="text-xl md:text-2xl text-emerald-50 max-w-[800px] mx-auto text-center leading-relaxed mb-10">
            We connect buyers, sellers and distributors across Canada, Colombia, Germany, United Kingdom Luxembourg, Mexico, Spain, Thailand,  U.S. and more in a global free-for-all. Hustle or get left behind. Cannabis?  Yeah, we do that too.
            </p>

            {/* Enhanced CTA button */}
            <div className="flex justify-center">
              <Button
                
                onClick={scrollToForm}
                className="relative group bg-white text-emerald-900 hover:bg-emerald-50 text-lg px-10 py-7 h-auto rounded-full shadow-lg transition-all duration-300 hover:shadow-emerald-500/30 hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center">
                  Join Waitlist
                  <svg
                    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative cannabis leaves at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 overflow-hidden z-10">
          <div className="absolute -bottom-10 -left-10 w-64 h-64 opacity-60">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Cannabis leaf decoration"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-60 transform scale-x-[-1]">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Cannabis leaf decoration"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-12 bg-[#E6EEF6] clip-path-wave"></div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section ref={formRef} className="py-16 md:py-24 bg-[#E6EEF6]">
        {/* <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-emerald-900">Join Our Waitlist</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Be the first to know about Weed Fest tickets, special events, and exclusive offers.
              </p>
            </div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-sm font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input id="fullName" name="fullName" placeholder="Enter your full name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="businessName" className="text-sm font-medium">
                        Business Name <span className="text-red-500">*</span>
                      </label>
                      <Input id="businessName" name="businessName" placeholder="Enter your business name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email address" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number (Optional)
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium">
                      Website (Optional)
                    </label>
                    <Input id="website" name="website" type="url" placeholder="https://yourwebsite.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="instagram" className="text-sm font-medium">
                      Instagram Handle (Optional)
                    </label>
                    <div className="flex">
                      <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-muted">
                        <Instagram className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <Input id="instagram" name="instagram" placeholder="yourusername" className="rounded-l-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Additional Information (Optional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your business and interests"
                      rows={4}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-6 h-auto text-lg"
                  >
                    Join Waitlist
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div> */}
        <div className="container">
        <WaitlistForm />
        </div>
      </section>
    </div>
  )
}

