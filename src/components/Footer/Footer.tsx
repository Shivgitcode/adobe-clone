import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="px-[32px]">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                    <div className="text-[12px] flex flex-row items-center gap-2 leading-[27px] font-normal hover:text-[#1473e6] cursor-pointer text-[#2c2c2c]"><CiGlobe fontSize={"20px"} /> Change region <IoIosArrowDown /></div>
                    <div className="flex items-center gap-2">
                        <FaFacebookSquare fontSize={"20px"} fill="#808080" className="hover:fill-[#909090] h-[20px]" ></FaFacebookSquare>
                        <ImInstagram fontSize={"20px"} fill="#808080" className="hover:fill-[#909090] h-[20px] aspect-[2/3]"></ImInstagram>
                        <FaSquareXTwitter fontSize={"20px"} fill="#808080" className="hover:fill-[#909090] h-[20px]"></FaSquareXTwitter>
                        <FaLinkedin fontSize={"20px"} fill="#808080" className="hover:fill-[#909090] h-[20px]"></FaLinkedin>


                    </div>
                </div>
                <div className="cursor-pointer">
                    <p className="text-[12px] leading-[27px] text-[#505050] font-normal">Copyright © 2024 All rights reserved. / <span className="hover:text-[#1473e6]">Privacy</span> / <span className="hover:text-[#1473e6]">Terms of Use</span> /</p>
                    <p className="text-[12px] leading-[27px] text-mytext-0 font-normal"><span className="hover:text-[#1473e6]">Cookie preferences</span> / <span className="hover:text-[#1473e6]"> Do not sell my personal information </span> / <span className="hover:text-[#1473e6]">AdChoices</span></p>
                </div>

            </div>

        </div>

    )
}
