import { IoReorderThree } from "react-icons/io5";
import { adobe } from "../../assets";
import Sidebar from "./Sidebar";
import { useAppContext } from "../../context/AppContext";
import { sidebar } from "../../constants";
import { IoIosArrowDown } from "react-icons/io";

// import { MouseEventHandler } from "react";

export default function Navbar() {
  const { setShow } = useAppContext()

  function handleNav() {
    setShow(prev => {
      return !prev
    })
  }
  return (
    <div className="w-screen overflow-hidden py-[15px] fixed z-[2] bg-white">
      <div className="w-[90%] mx-auto flex items-center  justify-between sm:hidden">
        <div className="flex items-center justify-center gap-[10px]">
          <IoReorderThree
            fontSize={"30px"}
            className="h-full ml-[-5px]"
            onClick={handleNav}
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

      {/* navbar */}

      <div className="hidden lg:flex justify-between items-center mx-auto w-[76%] h-full">
        <div className="flex gap-[10px]">
          <img src={adobe} alt="" className="w-[25px] h-[22px]" />
          <p className="text-[18px] leading-[27px] text-[#fa0f00] font-medium">
            Adobe
          </p>
          <div className="flex items-center ">
            {sidebar.map(el => {
              return <p className="px-[20px] text-[14px] leading-[19.6px] text-[#2c2c2c] font-normal flex items-center gap-[5px]">{el.name} <IoIosArrowDown></IoIosArrowDown> </p>
            })}
          </div>
        </div>

        <div>
          <a className="text-[14px] leading-[27px] text-[#4b4b4b] font-normal hover:text-[#136ff6] py-[11px] px-[8px] rounded-sm">Sign In</a>
        </div>




      </div>
    </div>
  );
}
