import demo from "../../../../assets/demo.png";
import { FaUser } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";

const ArticleCard = () => {
  return (
    <Link to="/article/1">
      <div className="rounded-lg shadow-lg cursor-pointer">
        <img src={demo} className="w-full" alt="" />
        <div className="p-5">
          <h3 className="text-2xl mb-5 text-[#183B56] font-semibold">
            Future of Work
          </h3>
          <p className="mb-4 text-[#000000bf]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <Link
              to="/article/1"
              className="text-[#183B56] font-semibold cursor-pointer"
            >
              {" ...Read More."}
            </Link>
          </p>
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
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
