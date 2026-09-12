import bannerImage from "../../assets/images/banner-stack.png";
const Banner = () => {
  return (
    <header className="mt-30">
      <div className=" container mx-auto grid-cols-12 justify-items-center items-center">
        {/* Header content  */}
        <div className="text-left col-span-7">
          <h1 className="text-[60px] font-black ">
            Build Your Ideal <br />
            <span className="bg-[linear-gradient(to_right,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-[18px]  text-[#4B5563] mt-3  ">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex gap-3 justify-start mt-6">
            <button className="py-3 px-4 rounded-xl text-[14px] font-semibold text-white border border-[#E5E7EB] min-w-42 bg-[linear-gradient(to_right,#F97316_0%,#EC4899_100%)] cursor-pointer">Explore Technologies</button>
            <button className="py-3 px-4 rounded-xl text-[14px] text-[#374151] border border-[#E5E7EB] min-w-42 cursor-pointer">Learn More </button>
          </div>
        </div>
        {/* Image */}
        <div className="col-span-5">
          <img src={bannerImage} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Banner;
