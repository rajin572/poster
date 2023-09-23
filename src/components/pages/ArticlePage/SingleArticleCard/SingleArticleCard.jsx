import demo from "../../../../assets/demo.png";
import { FaUser } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";

const SingleArticleCard = () => {
  return (
    <div className="w-full flex flex-col md:flex-row  mt-8 space-x-4">
      <div className="md:w-[35%]  md:h-[200px] flex justify-center items-center">
        <img
          src={demo}
          alt=""
          className="w-full min-h-fit sm:h-[300px] md:h-[200px] object-cover"
        />
      </div>
      <div className="flex flex-col md:w-[65%]">
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
          voluptate laboriosam molestias, provident facilis! .{" "}
          <Link
            to="/article/1"
            className="text-[#183B56] font-semibold cursor-pointer"
          >
            {" ...Read More."}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SingleArticleCard;
