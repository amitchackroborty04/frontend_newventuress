const StateHeader = ({ country }: { country: string }) => {
  const isProvience = country == "Canada"


  return (
    <div className="space-y-4 mb-[30px] text-left">
    <h1 className="text-gradient text-2xl md:text-3xl font-bold">
      Select  {isProvience ? "Provinces" : "States"} in {country}
    </h1>
    <p className="text-gray-500 text-sm">
    Choose one or more locations you are in
    </p>
  </div>
  )
}

export default StateHeader;
