import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <div>
            <div>
                <div><CiGlobe /> Change region <IoIosArrowDown /></div>
                <div>
                    <FaFacebookSquare></FaFacebookSquare>
                    <ImInstagram></ImInstagram>
                    <FaSquareXTwitter></FaSquareXTwitter>
                    <FaLinkedin></FaLinkedin>


                </div>
            </div>
            <div>
                <p>Copyright © 2024 All rights reserved. /Privacy/Terms of Use/</p>
                <p>Cookie preferences/Do not sell my personal information/AdChoices</p>
            </div>

        </div>
    )
}
