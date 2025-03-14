'use client'
import { Button } from "@/components/ui/button";
import StarRating from "@/components/ui/star-rating";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MdOutlineReviews } from "react-icons/md";
import * as React from "react";
import { ProvideStarRating } from "@/app/(website)/products/[id]/_components/ProvideStarRatting";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface ReviewData {
  userID: string;
  storeID: string;
  rating: number;
  comment: string;
}

interface ApiResponse {
  message: string;
  success: boolean;
}

const VendorStoreHeader = () => {
  const [rating, setRating] = React.useState(0);
  const [review, setReview] = React.useState("");
  const params = useParams();
  const reviewsid = params?.id as string;
  const session = useSession();
  const userID = session.data?.user.id as string;

  console.log("vendor id", userID)
  console.log("store id", reviewsid)

  const { mutate } = useMutation<ApiResponse, Error, ReviewData>({
    mutationKey: ["storeReview"],
    mutationFn: (data) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/store/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),

    onSuccess: (data) => {
      if (data.success) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        });
        return;
      }
      toast.success(data.message, {
        position: "top-right",
        richColors: true,
      });
      // queryClient.invalidateQueries({ queryKey: ["allreview"] })
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-right",
        richColors: true,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please provide a rating.", {
        position: "top-right",
        richColors: true,
      });
      return;
    }
    console.log("Rating:", rating);
    console.log("Review:", review);
    mutate({ userID, storeID: reviewsid, rating, comment: review });
    setRating(0);
    setReview("");
  };

  return (
    <div className="relative ">
      <div
        style={{
          backgroundImage: `url("https://i.postimg.cc/HxDYXZQN/image-1.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          top: 0,
          left: 0,
          height: "300px",
        }}
        className="bg-cover animate-moveBackground bg-gray-200"
      />
      <div className="container relative -mt-[88px]">
        <Image
          src="https://utfs.io/f/HkyicnKv4pLkPTppIqbBiT8gFA2Wp9JkLtc5ZdKlhCyNY0vX"
          height={180}
          width={180}
          className="rounded-[12px] object-cover"
          alt="profile"
        />
        <h1 className="mt-[20px] text-[48px] text-[#000000] font-semibold leading-[57.6px]">
          License Information
        </h1>
        <div className="flex items-center gap-x-3">
          <StarRating fill={4} outline={1} size={20} />
          <span className="text-[#3D3D3D] text-[16px] font-bold"> (4.0)</span>
        </div>

        <div className="mt-[20px] flex items-center gap-[15px]">
          <Button asChild>
            <Link
              href="/vendor-store/456/contact"
              className="flex items-center gap-x-2 text-[16px] font-bold leading-[19.2px]"
            >
              <Image
                src="/assets/svg/inbox.svg"
                alt="inbox"
                height={15}
                width={15}
              />
              Message
            </Link>
          </Button>
          {userID === reviewsid ? (
            <div />

          ) :
            (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="bg-white text-gradient dark:text-gradient-pink  dark:hover:text-[#7449B9] "  >
                    <span>
                      <MdOutlineReviews className="text-black " />
                    </span>
                    Review</Button>
                </DialogTrigger>
                <DialogContent className="w-[80%] md:w-[50%]">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 rounded-lg w-full"
                  >
                    <h2 className="text-lg font-semibold text-gradient dark:bg-pinkGradient">Add a review</h2>

                    <div className="flex gap-2">
                      <label htmlFor="rating" className="text-base text-neutral-700">
                        Your rating <span className="text-red-600">*</span>
                      </label>
                      <span>
                        <ProvideStarRating rating={rating} onChange={setRating} />
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="review" className="text-base text-neutral-700">
                        Your review <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className="p-3 border rounded-lg min-h-[120px] border-neutral-300 focus:border-green-600 focus:ring-green-600 dark:bg-white dark:text-black"
                        placeholder="Write your review"
                        required
                        aria-required="true"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="self-start "
                    >
                      Submit
                    </Button>
                  </form>
                </DialogContent>
              </Dialog >
            )

          }
        </div>
      </div>
    </div>
  );
};

export default VendorStoreHeader;