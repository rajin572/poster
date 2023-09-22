import demo from "../../../../assets/demo.png";
import { FaUser } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";

const SingleArticleCard = () => {
  return (
    <div className="grid grid-cols-6 gap-5 items-center">
      <img src={demo} alt="" className="w-full h-48 col-span-2" />
      <div className="p-5 col-span-4">
        <h3 className="text-2xl mb-5 text-[#183B56] font-semibold">
          Future of Work
        </h3>
        <div className="flex justify-between items-center mb-3 text-base">
          <div className="flex items-center">
            <FaUser />
            <p className="ps-1">@dinislamrajin</p>
          </div>
          <div className="flex items-center">
            <BiSolidTimeFive />
            <p className="ps-1">2 March</p>
          </div>
        </div>
        <p className="mb-4 text-[#000000bf]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          distinctio, nihil ut, earum praesentium assumenda illo tenetur odit
          non, maiores consectetur. Eaque ab ullam laboriosam reiciendis, atque
          quis eum ipsa repudiandae quod. Tempora inventore eligendi saepe
          repudiandae nesciunt, possimus at dicta, vero doloribus neque ad
          voluptate laboriosam molestias, provident facilis! {" ...Read More."}
        </p>
      </div>
    </div>
  );
};

export default SingleArticleCard;
