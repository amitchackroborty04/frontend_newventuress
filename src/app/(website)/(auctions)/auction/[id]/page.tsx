import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AuctionDetails from "./_components/AuctionDetails";

const Page = async ({ params }: { params: { id: string } }) => {
  const currentuser = await auth();

  if(!currentuser) redirect("/login")
  return (
    <div>
      
      <AuctionDetails auctionId={params.id} />
    </div>
  );
};

export default Page;
