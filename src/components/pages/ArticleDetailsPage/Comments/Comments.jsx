import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";

const Comments = () => {
  const user = true;
  return (
    <div className="bg-gray-300 py-1 md:p-2 px-2 md:px-5 rounded-md text-[#000000bf] mb-3">
      {/* author date and time */}
      <div className="flex justify-between items-center text-[#183B56]">
        <div className="flex items-center">
          <FaUser />
          <p className="ps-1">@dinislamrajin</p>
        </div>
        <div className="flex items-center">
          <BiSolidTimeFive />
          <p className="ps-1">2 March</p>
          {user ? (
            <div className="flex items-center ms-2">
              <div className="mr-2 text-[red] cursor-pointer">
                <MdDelete />
              </div>
              <div className="mr-2 text-[#0085B8] cursor-pointer">
                <FaEdit />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {/* comment */}
      <p className="ps-2 mt-1 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default Comments;
