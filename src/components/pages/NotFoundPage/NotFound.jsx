import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center min-h-screen w-[90%] m-auto">
      <h1 className="text-[#FF8060] text-6xl md:text-7xl lg:text-9xl font-extrabold mb-10">
        404
      </h1>
      <h3 className=" text-xl md:text-2xl lg:text-3xl mb-5 font-bold">
        OOPS! NOTHING WAS FOUND
      </h3>
      <p className="text-base lg:text-xl">
        <span>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.{" "}
        </span>
        <Link
          to="/"
          className="text-[#FF8060] font-bold underline decoration-[#FF8060]"
        >
          Return to homepage
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
