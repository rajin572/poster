import Banner from "./Banner/Banner";
import RecentArticle from "./RecentPost/RecentArticle";
import YouMayLike from "./YouMayLike/YouMayLike";

const Home = () => {
  return (
    <div className="w-[95%] md:w-[90%] mx-auto">
      <Banner />
      <RecentArticle />
      <YouMayLike />
    </div>
  );
};

export default Home;
