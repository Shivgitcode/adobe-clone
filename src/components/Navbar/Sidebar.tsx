import { sidebar } from "../../constants";
import { useAppContext } from "../../context/AppContext";
import { IoIosArrowDown } from "react-icons/io";

export default function Sidebar() {
    const { show } = useAppContext();
    return (
        <div className={`h-screen w-screen bg-white fixed left-[-40px]  top-[73px] ${show && "hidden"} z-[1]`}>
            {sidebar.map(el => {
                return (
                    <div className="flex items-start justify-between  py-[12px] pl-[62px] pr-[32px] text-[#2c2c2c] text-[14px] leading-[19.6px] border-b-[1px]">{el.name} <IoIosArrowDown /></div>
                )
            })}

        </div>
    )
}
