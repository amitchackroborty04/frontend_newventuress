"use client"
import * as React from "react";
import { ProvideStarRating } from "./ProvideStarRatting";
import { Button } from "@/components/ui/button";
import { ReviewFormProps } from "./types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

interface reviewType {
  storeID : string,
  productID : string | string[],
  userID : string,
  rating : number,
  comment : string
}

export const ReviewForm: React.FC<ReviewFormProps> = () => {

  const params = useParams();
  const session = useSession();
  const userId = session.data?.user.id;

  const queryClient = useQueryClient();
  const [rating, setRating] = React.useState(0);
  const [review, setReview] = React.useState("");

  const {mutate} = useMutation<any, unknown, reviewType >({
    mutationKey : ["add-review"],
    mutationFn : (data ) => fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/product/create`, {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(data)
    })
    .then((res) => res.json()),
    
    onSuccess : (data)=> {
      if(data.status === false){
        toast.error(data.message, {
          position: "top-right",
          richColors: true
        })
        return ;
      }
      toast.success(data.message, {
        position: "top-right",
        richColors: true
      })
      queryClient.invalidateQueries({queryKey : ["allreview"]})
    }
  })

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please provide a rating.");
      return;
    }


    console.log("Rating:", rating);
    console.log("Review:", review);

    const userID = userId;
    const storeID = "6795fbc52288a452214d2371"; 
    const productID = params.id; 

    if (!userID || !storeID || !productID) {
      alert("Invalid store, product, or user information.");
      return;
    }

    mutate({ userID, storeID, productID, rating, comment: review });
    setRating(0);
    setReview("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-lg w-full"
    >
      <h2 className="text-lg font-semibold text-gradient dark:text-gradient-pink">Add a review</h2>

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
          className="p-3 border rounded-lg min-h-[120px] border-neutral-300 focus:border-green-600 focus:ring-green-600 dark:bg-white text-black"
          placeholder="Write your review"
          required
          aria-required="true"
        />
      </div>

      <div className="pb-7">
        <Button
          type="submit"
          className="self-start px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          Submit
        </Button>
    </div>
    </form>
  );
};
