import { Link } from "react-router-dom";
/* eslint-disable react/no-unescaped-entities */

const SignIn = () => {
  const handleSignIn = () => {
    console.log("hahah");
  };
  return (
    <div className="min-h-screen mb-20">
      <div className=" flex justify-center items-center flex-col mb-10">
        <div className="text-center pt-20">
          <h1 className="text-3xl md:text-5xl font-bold">Sign In now!</h1>
        </div>
        <div className="mt-20 rounded-md border-[1px] border-[#0085B8]  p-5 md:p-10 w-90% sm:w-[70%] md:w-[50%] lg:w-[40%]">
          <form onSubmit={handleSignIn} className="">
            <div className="mb-5">
              <label>
                <span>Email</span>
              </label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="border-2 border-[#0085B8] p-2 outline-none w-full mt-3 rounded"
              />
            </div>
            <div className="mb-5">
              <label>
                <span>Password</span>
              </label>
              <br />
              <input
                name="password"
                type="password"
                placeholder="Enter Your Password"
                required
                className="border-2 border-[#0085B8] p-2 outline-none w-full mt-3 rounded"
              />
            </div>
            <p className=" text-red-600">{"error"}</p>
            <div className=" mt-6">
              <button className="w-full border-2 border-[#0085B8] bg-[#0085B8] text-white font-bold py-2 rounded">
                Sign In
              </button>
            </div>
          </form>
          <p className="mt-10">
            Haven't any account,{" "}
            <Link to="/auth/signup" className=" text-[#0085B8] font-bold">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
