import { news } from "../../constants";
import NewsCard from "./NewsCard";

export default function News() {
    return (
        <div className="lg:w-[500px] h-[500px] w-full my-[32px]">
            <div className="p-[24px] text-white text-[18px] leading-[27px] font-normal myGradient3 px-[24px] rounded-tr-[16px] rounded-tl-[16px]">
                <p>IN THE NEWS</p>
            </div>
            <div className="p-[24px] bg-[#ededed] rounded-br-[20px] rounded-bl-[20px]">
                {news.map(el => {
                    return <NewsCard el={el}></NewsCard>
                })}
            </div>
        </div>
    )
}
