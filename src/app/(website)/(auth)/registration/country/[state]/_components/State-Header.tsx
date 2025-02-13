const StateHeader = ({ country }: { country: string }) => (
  <div className="space-y-4 mb-[30px] text-left">
    <h1 className="text-gradient text-2xl md:text-3xl font-bold">
      Select Any State of {country}
    </h1>
    <p className="text-gray-500 text-sm">
    Choose Your Business State
    </p>
  </div>
);

export default StateHeader;
