// package import
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, User } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

// local import
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Blog } from "@/types/blog";

interface Props {
  data: Blog;
  index?: number;
}

function BlogsCards({ data, index = 0 }: Props) {
  const { image, title, _id, createdAt } = data;
  return (
    <motion.div
      initial={{ opacity: 0.7, height: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.2,
        },
        height: "100%",
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
        },
        height: 0,
      }}
    >
      <Card className="overflow-hidden bg-[#E6EEF6] shadow-none border-0">
        <CardHeader className="p-0 group overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full w-[370px], lg:h-[230px] h-[270px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-150 duration-300"
          />
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center gap-4 text-sm text-[#444444] mb-4">
            <div className="flex items-center gap-1 text-[12px]">
              <CalendarDays className="w-4 h-4" />
              {moment(createdAt).format("DD MMM, YYYY")}
            </div>
            <div className="flex items-center gap-1 text-[12px]">
              <User className="w-4 h-4" />
              By admin
            </div>
            {/* <div className="flex items-center gap-1 text-[12px]">
                            <MessageCircle className="w-4 h-4" />
                            {} Comments
                        </div> */}
          </div>
          <h3 className="font-medium line-clamp-2 text-[18px] text-[#000000]">
            {title}
          </h3>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link
            href={`/blogs/${_id}`}
            className="text-gradient hover:text-primary font-medium inline-flex items-center gap-1"
          >
            Read More
            <ArrowRight className="w-[25px] h-[22px] font-light text-[#27376a]" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default BlogsCards;

export const BlogSkeleton = () => {
  return (
    <div className="overflow-hidden bg-[#EDEDED] shadow-none border-0 rounded-xl">
      <div className="p-0 overflow-hidden relative">
        <Skeleton className="w-full h-[230px] bg-gray-200" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-4 text-sm mb-4">
          <Skeleton className="w-20 h-4 bg-[#757575]" />
          <Skeleton className="w-16 h-4 bg-[#757575]" />
        </div>
        <Skeleton className="w-full h-6 bg-[#757575] mb-2" />
        <Skeleton className="w-2/3 h-6 bg-[#757575]" />
      </div>
      <div className="p-6 pt-0">
        <Skeleton className="w-24 h-5 bg-[#757575]" />
      </div>
    </div>
  );
};
