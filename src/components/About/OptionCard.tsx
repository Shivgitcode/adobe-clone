// import { GiHidden } from "react-icons/gi"
import { Option } from "../../constants"
import { useAppContext } from "../../context/AppContext"

type OptionProp = {
    el: Option

}


export default function OptionCard({ el }: OptionProp) {
    const { handleOptions } = useAppContext()


    return (
        <div className={`py-[12px] w-full pr-[44px] pl-[32px] ${el.name === "Shop for" ? "border-none" : "border-t-[0.5px]"}`} onClick={() => handleOptions(el.id)}>
            <div className="text-[14px] leading-[19.6px] text-[#505050] font-medium">{el.name}</div>
            <ul className={`py-[12px] flex flex-col items-start gap-[2px] ${el.hidden && "hidden"}`}>
                {el.moreOptions.map(el => {
                    return (
                        <li className={`text-[12px]  hover:text-[#1473e6] leading-[27px]  px-[32px] text-[#505050] font-normal ml-[-30px]`}>{el}</li>
                    )
                })}

            </ul>
        </div>
    )


}

