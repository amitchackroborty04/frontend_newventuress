import { auth } from "@/auth";
import AddButon from "./_components/AddButon";
import CuponContainer from "./_components/CuponContainer";
import CuponFilter from "./_components/CuponFilter";


const page = async () => {
  const currentUser = await auth();

  if(!currentUser) return;

  const userId = currentUser.user.id
  return (
    <div>

      <AddButon />
      <CuponFilter userId={userId} />
      <CuponContainer />
    </div>
  );
};

export default page;
