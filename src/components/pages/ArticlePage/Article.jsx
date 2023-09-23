import { FiSearch } from "react-icons/fi";
import SingleArticleCard from "./SingleArticleCard/SingleArticleCard";

const Article = () => {
  return (
    <div className="w-[95%] md:w-[90%] mx-auto mt-10">
      <div className="flex items-center mb-20">
        <input
          className=" w-full outline-none bg-slate-200 rounded-md py-2 px-5"
          placeholder="Search a post"
          type="text"
        />
        <p className="cursor-pointer ms-[-30px] text-[#183B56] font-bold text-xl">
          <FiSearch />
        </p>
      </div>
      <SingleArticleCard />
      <SingleArticleCard />
      <SingleArticleCard />
      <SingleArticleCard />
      <SingleArticleCard />
    </div>
  );
};

export default Article;
