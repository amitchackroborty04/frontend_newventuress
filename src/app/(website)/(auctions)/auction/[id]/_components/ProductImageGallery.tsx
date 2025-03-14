import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProductImageGalleryProps {
  thumbnails: string[];
  mainImage: string[];
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  thumbnails,
  mainImage,
}) => {
  const [selectedImage, setSelectedImage] = useState(mainImage[0]); // Initialize with the first image

  // Reset selected image when mainImage changes
  useEffect(() => {
    setSelectedImage(mainImage[0]);
  }, [mainImage]);

  const handleSelectImage = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex flex-wrap gap-5 items-start w-full md:w-auto md:max-w-full">
      {/* Thumbnails Section */}
      <div className="flex flex-row gap-5 w-full order-2 md:order-1 md:flex-col md:w-[180px] md:h-[186px]">
        {thumbnails.map((image, index) => (
          <Image
            key={index}
            loading="lazy"
            src={image}
            alt={`Thumbnail ${index}`}
            width={100}
            height={100}
            className="object-cover rounded-lg flex-1 h-auto md:w-[180px] md:h-full cursor-pointer border-2 border-transparent hover:border-gray-500"
            onClick={() => handleSelectImage(image)}
          />
        ))}
      </div>

      {/* Main Image Section */}
      <Image
        loading="lazy"
        src={selectedImage}
        alt="Selected Product"
        width={570}
        height={600}
        className="object-cover rounded-lg aspect-[0.95] order-1 md:order-2 duration-500"
      />
    </div>
  );
};
