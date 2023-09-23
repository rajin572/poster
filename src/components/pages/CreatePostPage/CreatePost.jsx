import { ImCross } from "react-icons/im";

const CreatePost = () => {
  const handleCreatePost = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const post = form.post.value;
    console.log(title, photo, category, post);
  };

  return (
    <div className="w-[95%] md:w-[90%] mx-auto mt-10">
      <h1 className="font-bold text-3xl text-center mb-20">Create a post</h1>
      <form
        onSubmit={handleCreatePost}
        className="w-full flex flex-col space-y-4 md:space-y-8 mt-4"
      >
        <div className=" flex items-center">
          <label className="text-[#183B56] me-2 font-bold text-xl">
            Title:
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter post title"
            className="px-4 py-2 outline-none bg-slate-200 md:w-[50%] rounded-md"
          />
        </div>
        <div>
          <label className="text-[#183B56] me-2 font-bold text-xl">
            Add Photo:
          </label>
          <input type="file" name="photo" className="px-4" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <label className="text-[#183B56] me-2 font-bold text-xl">
              Category:
            </label>
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                className="px-4 py-2 outline-none bg-slate-200 rounded-md"
                name="category"
                placeholder="Enter post category"
                type="text"
              />
              <div className="bg-[#183B56] text-white px-4 py-2 font-semibold cursor-pointer rounded-md">
                Add
              </div>
            </div>
          </div>

          {/* categories */}
          <div className="flex px-4 mt-3">
            <div className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md">
              <p>Tech</p>
              <p className="text-white bg-black rounded-full cursor-pointer p-1 text-sm">
                <ImCross />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-[#183B56] me-2 font-bold text-xl mb-5">
            Add Details:
          </label>
          <textarea
            rows={15}
            cols={30}
            name="post"
            className="px-4 py-2 outline-none bg-slate-200"
            placeholder="Enter post description"
          />
        </div>
        <button className="bg-[#183B56] rounded-md w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
