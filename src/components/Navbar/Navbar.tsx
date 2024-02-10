import { IoReorderThree } from "react-icons/io5";
import { adobe } from "../../assets";

export default function Navbar() {
  return (
    <div className="w-screen overflow-hidden py-[15px] fixed z-[2] bg-white">
      <div className="w-[90%] mx-auto flex items-center  justify-between">
        <div className="flex items-center justify-center gap-[10px]">
          <IoReorderThree
            fontSize={"30px"}
            className="h-full ml-[-5px]"
          ></IoReorderThree>
          <div className="flex items-center justify-center px-[8px] gap-[10px]">
            <img src={adobe} alt="" className="w-[25px] h-[22px]" />
            <p className="text-[18px] leading-[27px] text-[#fa0f00] font-medium">
              Adobe
            </p>
          </div>
        </div>

        <div className="py-[11px] hover:text-[#136ff6] px-[8px] text-[14px] text-[#4b4b4b] rounded-[4px] ">
          Sign In
        </div>
      </div>
    </div>
  );
}
