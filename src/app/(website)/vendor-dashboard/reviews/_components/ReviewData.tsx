
const ReviewData = () => {
  return (
    <div className="h-[90px] w-full bg-white p-[8px] rounded-[12px] flex items-center justify-between mb-[30px]">
      <div className="px-[10px] text-[12px] leading-[14.4px]">
        <span className="font-medium">All</span> (20) |
        <span className="text-gradient"> Approve(30) | </span>
        <span className="text-gradient"> pending (30)  </span>
   
      </div>
     
    </div>
  );
};

export default ReviewData;