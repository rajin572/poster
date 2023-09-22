import { LuMoveRight } from "react-icons/lu";
import ArticleCard from "../ArticleCard/ArticleCard";
const YouMayLike = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center">
        <h1 className="text-3xl md:text-4xl text-[#183B56] font-semibold mb-2 pe-2 md:pe-5">
          You May Like...{" "}
        </h1>
        <LuMoveRight className="text-3xl md:text-4xl text-[#183B56] font-semibold" />
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 mt-10">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default YouMayLike;
