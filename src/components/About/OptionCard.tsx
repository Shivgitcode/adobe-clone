import { Option } from "../../constants"

type OptionProp = {
    el: Option

}


export default function OptionCard({ el }: OptionProp) {
    return (
        <div className="py-[12px] w-full pr-[44px] pl-[32px]">
            <div className="text-[14px] leading-[19.6px] text-[#505050] font-medium">{el.name}</div>
            <ul className="py-[12px] flex flex-col items-start gap-[2px]">
                {el.moreOptions.map(el => {
                    return (
                        <li className="text-[12px] leading-[27px]  px-[32px] text-[#505050] font-normal ml-[-30px]">{el}</li>
                    )
                })}

            </ul>
        </div>
    )


}

