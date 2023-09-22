import { LuMoveRight } from "react-icons/lu";
import ArticleCard from "../ArticleCard/ArticleCard";
const RecentArticle = () => {
  return (
    <div>
      <div className="flex items-center">
        <h1 className="text-3xl md:text-4xl text-[#183B56] font-semibold mb-2 pe-2 md:pe-5">
          Recent Articles
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
      <div className="flex justify-center mt-20">
        <button className="px-4 py-2 bg-[#0085B8] text-white rounded shadow-md">
          All Articles
        </button>
      </div>
    </div>
  );
};

export default RecentArticle;
