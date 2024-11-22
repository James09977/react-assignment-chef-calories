import { CiSearch } from "react-icons/ci";
import usrPic from "../../../../src/../public/img/Vector.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar flex justify-between mt-12 p-0 ">
        <div>
          <h1 className=" font-bold text-3xl ">Racepi Kalories</h1>
        </div>

        <div className="space-x-12 text-base text-[#150b2bab] ">
          <a className="" href="">
            Home
          </a>
          <a href="">Recipe</a>
          <a href="">About</a>
          <a href="">Search</a>
        </div>
        <div className="relative flex items-center">
          <CiSearch className="w-7 h-7 absolute text-gray-400 font-bold ml-3" />

          <input
            type="text"
            placeholder=" Search"
            className="input bg-[#150b2b0a] w-24 md:w-auto rounded-full pl-10 pr-3"
          />

          <div className=" bg-[#0BE58A] p-4 rounded-full ml-4">
            <img src={usrPic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
