"use client";

import Commentcard from "@/components/shared/cards/commentcard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import ErrorContainer from "@/components/ui/error-container";
import { useSession } from "next-auth/react";


function BlogComments() {
  const [commentText, setCommentText] = useState("");
  const { id: blogID } = useParams();
  const session = useSession();
  const usernameOrEmail = session.data?.user.email;
  const fullName = session.data?.user.fullName;
 
  

  const queryClient = useQueryClient();

 

  // Fetch Blog Comments
  const {
    isLoading,
    data: comments,
    isError,
    error
  } = useQuery({
    queryKey: ["blog-comments", blogID],
    queryFn: async () => {
      if (!blogID) return null;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/comments?blogID=${blogID}`
      );
      if (!response.ok) {
        if (response.status === 404) {
          const errorData = await response.json();
          if (errorData.message === "No comments") {
            throw new Error("No comments found.");
          }
        }
        throw new Error("Failed to fetch comments");
      }
      return response.json();
    },
    enabled: !!blogID,
  });

  // Submit New Comment
  const mutation = useMutation<void, unknown, { blogID: string | string[]; fullName: string; usernameOrEmail: string; comments: string }>({

    mutationFn: async (newComment) => {
      console.log(newComment);
      
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/user/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newComment),
        }
      );
      if (!response.ok) throw new Error("Failed to submit comment");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog-comments", blogID] });
      setCommentText(""); // Clear input field after submission
    },
    onError: (error) => {
      console.error("Error submitting comment:", error);
    },
  });

  // Handle Form Submission
  interface NewComment {
    blogID: string | string[];
    fullName: string;
    usernameOrEmail: string;
    comments: string;
  }
 
  

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!commentText.trim()) return;

    mutation.mutate({
      blogID,
      fullName,
      usernameOrEmail,
      comments: commentText,
    } as NewComment);
  };

  // Render Comments
  let content;
  if (isLoading) {
    content = (
      <div className="flex flex-col items-center justify-center w-full h-[400px] text-black">
        <Loader2 className="animate-spin opacity-80" />
        <p>Loading comments...</p>
      </div>
    );
  } else if (isError) {
    // Display custom error message when there are no comments
    if (error instanceof Error && error.message === "No comments found.") {
      content = (
        <div className="py-5 text-center">
          <TextAnimate animation="slideUp" by="word">
            No comments found on this blog!
          </TextAnimate>
        </div>
      );
    } else {
      content = <ErrorContainer message="Failed to load comments. Please try again!" />;
    }
  } else if (comments?.data.length <= 0 ) {
    content = (
      <div className="py-5 text-center">
        <TextAnimate animation="slideUp" by="word">
          No comments found on this blog!
        </TextAnimate>
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col items-start mt-5 w-full max-md:max-w-full">
        {comments?.data?.map((comment: any) => (
          <Commentcard
            key={comment._id}
            author={comment.fullName}
            date={comment.createdAt}
            content={comment.comments}
            avatarUrl={""}
            id={comment._id}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="py-4">
      {/* Comment Form */}
      <h3 className="mb-4 text-2xl font-semibold text-black">Leave us a comment</h3>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-[#444444] text-base">Full Name</Label>
            <Input
              id="fullName"
              value={fullName}
              disabled
              className="p-6 text-primary-black bg-gray-100 border border-[#C5C5C5] cursor-not-allowed"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#444444] text-base">Username or Email</Label>
            <Input
              id="email"
              type="email"
              value={usernameOrEmail}
              disabled
              className="p-6 text-primary-black bg-gray-100 border border-[#C5C5C5] cursor-not-allowed"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="comment" className="text-[#444444] text-base">Comments</Label>
          <Textarea
            id="comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write your comments here..."
            required
            className="p-6 text-primary-black border border-[#C5C5C5] min-h-[150px] placeholder:text-[#C5C5C5] focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <div className="flex justify-center">
          <Button type="submit" disabled={mutation.isPending} className="w-[285px] h-[56px]">
            {mutation.isPending ? "Submitting..." : "Submit Comment"}
          </Button>
        </div>
      </form>

      {/* Comments Section */}
      <div className="py-4">
        <div className="text-2xl font-medium leading-tight text-black">Comments</div>
        {content}
      </div>
    </div>
  );
}

export default BlogComments;
