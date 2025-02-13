import React from "react";
import CuponContainer from "./_components/CuponContainer";
import CuponFilter from "./_components/CuponFilter";
import AddButon from "./_components/AddButon";


const page = () => {
  return (
    <div>

      <AddButon />
      <CuponFilter />
      <CuponContainer />
    </div>
  );
};

export default page;
