import banner from "../../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex justify-between items-center flex-col-reverse mb-10 md:mb-0 md:flex-row min-h-[80vh]">
      <div className="w-full md:w-1/2">
        <h1 className=" text-4xl lg:text-5xl text-[#183B56] font-bold mb-10">
          Read the most interesting articles
        </h1>
        <p className="text-[#000000bf]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolorem ducimus ab voluptatem sunt earum consequuntur blanditiis
          laboriosam vitae non libero.
        </p>
      </div>
      <div>
        <img src={banner} className="w-full h-fit" alt="" />
      </div>
    </div>
  );
};

export default Banner;
