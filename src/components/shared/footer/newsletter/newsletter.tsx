import Hideon from "@/provider/Hideon";
import dynamic from "next/dynamic";
import Image from "next/image";
const NewsletterForm = dynamic(() => import("./newsletterForm"), {
  ssr: false,
});

// Routes where the Navbar should be hidden
const hideRoutes = [
  "/age-alert",
  "/vendor-dashboard",
  "/login",
  "/registration",
  "/forgot-password",
];

function NewsletterPage() {
  return (
    <Hideon routes={hideRoutes}>
      <section
        className="h-auto lg:h-[457px] animate-moveBackground "
        style={{
          backgroundImage: "url('/assets/newsletter/newsletter-bg.png')",
          backgroundRepeat: "repeat", // Ensure seamless background
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="container mx-auto py-12 w-full h-full flex items-center">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Left column with image */}
            <div className="hidden lg:block md:w-[470px] h-[293px] relative">
              <Image
                src="/assets/newsletter/newsletter.png"
                alt="Newsletter feature image"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right column with form */}
            <div className="flex-1 w-full bg-white/70 p-[20px] md:p-[40px] rounded-[16px]">
              <div className="space-y-4 mb-5">
                <h2 className="text-[25px] lg:text-[32px] font-semibold text-gradient">
                  Subscribe Newsletter
                </h2>
                <h3 className="text-semibold leading-[26.4px] lg:text-[22px] text-gradient">
                  Get bidding update earlier.
                </h3>
                <p className="text-[#444444] text-[14px] lg:text-[16px]">
                  Subscribe to our newsletter and be the first to discover the
                  latest CBD tips, exclusive discounts, and wellness news.
                </p>
              </div>

              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </Hideon>
  );
}

export default NewsletterPage;
