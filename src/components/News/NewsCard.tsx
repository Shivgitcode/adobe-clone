import { News } from "../../constants"

export default function NewsCard({ el }: { el: News }) {
    return (
        <div className="flex flex-col items-start">
            <h3 className="text-[16px] leading-[20px] text-mytext-0 font-medium">{el.name}</h3>
            <p className="text-[16px] leading-[24px] text-mytext-0 font-normal my-[8px]">{el.desc}</p>
            <button className="text-[14px] leading-[21px] text-mytext-0 font-medium my-[8px] hover:underline">{el.button}</button>
            {
                !(el.name === "Adobe recognized in TIME Best Inventions of 2023.") && <div className="h-[1px] w-full my-[16px] bg-[#2c2c2c] rounded-[20px]"></div>}
        </div>
    )
}
