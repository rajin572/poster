import { Link } from "react-router-dom";

const SignUp = () => {
  const handleregister = () => {};

  return (
    <div className="min-h-screen mb-20">
      <div className=" flex justify-center items-center flex-col">
        <div className="text-center pt-20">
          <h1 className="text-3xl md:text-5xl font-bold">Sign In now!</h1>
        </div>
        <div className="mt-20 rounded-md border-[1px] border-[#0085B8]  p-5 md:p-10 w-90% sm:w-[70%] md:w-[50%] lg:w-[40%]">
          <form onSubmit={handleregister}>
            <div className="mb-5">
              <label>
                <span>Name</span>
              </label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
                className="border-2 border-[#0085B8] p-2 outline-none w-full mt-3 rounded"
              />
            </div>
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
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-10">
            Allreday have an account,{" "}
            <Link to="/auth/signin" className=" text-[#0085B8] font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
