import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const SignLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SignLayout;
