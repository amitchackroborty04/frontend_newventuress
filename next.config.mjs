// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
      {
        protocol: "https",
        hostname: "www.monirhrabby.info",
      },
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
      },
      {
        protocol: "https",
        hostname: "media-cldnry.s-nbcnews.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
      {
        protocol: "https",
        hostname: "www.dea.gov", // ✅ Added this domain
      },
      {
        protocol: "https",
        hostname: "example.com", // ✅ Added example.com here
      },
      {
        protocol: "http", // Allow http for Cloudinary
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https", // Also allow https for Cloudinary
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
