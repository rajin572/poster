import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";
import demo from "../../../assets/demo.png";
import Comments from "./Comments/Comments";
// import { FaUser } from "react-icons/fa6";

const ArticleDetails = () => {
  const user = true;
  return (
    <div className="w-[95%] md:w-[90%] mx-auto mt-10">
      {/* header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#183B56]">
          Future of Work will be easy if you read the article
        </h1>
        {user ? (
          <div className="flex items-center">
            <div className="mr-2 text-[red] text-xl cursor-pointer">
              <MdDelete />
            </div>
            <div className="mr-2 text-[#0085B8] text-xl cursor-pointer">
              <FaEdit />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/* author and date time */}
      <div className="flex justify-between items-center mt-5 font-semibold text-[#000000bf]">
        <div className="flex items-center">
          <FaUser />
          <p className="ps-1">@dinislamrajin</p>
        </div>
        <div className="flex items-center">
          <BiSolidTimeFive />
          <p className="ps-1">2 March 2021</p>
        </div>
      </div>
      {/* image */}
      <img
        src={demo}
        alt=""
        className="w-full h-400 md:h-[500px] object-cover mt-10"
      />
      {/* details */}
      <p className="mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex eligendi
        magnam, dolores nulla dolore doloribus maxime blanditiis dolorum dolorem
        aspernatur ut, laboriosam accusamus. Earum deleniti quod inventore
        consectetur cumque molestiae. Rem veritatis ea ipsam corporis eaque
        laboriosam soluta, inventore dolore quibusdam quod deleniti sint illum.
        In, assumenda odit necessitatibus accusantium corporis voluptas officia
        earum, ab explicabo praesentium excepturi sapiente nobis perspiciatis,
        tempore ipsam debitis dolores? Voluptatem autem, magnam impedit ullam
        dignissimos provident debitis laboriosam tempora voluptatibus optio
        sequi atque commodi molestias aspernatur sit accusamus corporis,
        doloribus aliquam dicta, quasi id maxime voluptas tenetur. Explicabo
        suscipit obcaecati quibusdam officia a commodi delectus id sit quis?
        Eligendi suscipit saepe accusamus totam eveniet a provident voluptatem
        autem numquam distinctio neque ullam dolorum dolorem officia maiores
        quasi iste beatae doloremque, temporibus eaque quos repellat optio? Est
        vel distinctio doloribus quia, qui impedit. Sapiente quam, voluptatem
        magni itaque voluptates tempora cupiditate harum rem quisquam?
      </p>
      {/* category */}
      <div className="flex items-center mt-10">
        <p className=" mr-2">Category:</p>
        <div className="flex items-center">
          <p className="bg-gray-300 py-1 px-3 rounded-md mr-2 text-[#183B56]">
            Tech
          </p>
          <p className="bg-gray-300 py-1 px-3 rounded-md mr-2 text-[#183B56]">
            Code
          </p>
        </div>
      </div>
      {/* comment */}
      <div className="mt-10">
        <p className="text-xl font-semibold mb-5">Comments :</p>
        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </div>

      {/* write comment */}
      <div className="mt-20 flex flex-col md:flex-row">
        <input
          type="text"
          placeholder="Write a comment"
          className="outline-none border-none py-2 px-5 rounded-md md:w-[100%] bg-slate-200"
        />
        <button className="py-2 px-5 bg-[#183B56] text-white rounded-md md:rounded-r-md-md md:rounded-l-none mt-2 md:mt-0 md:ms-[-144px]">
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default ArticleDetails;
