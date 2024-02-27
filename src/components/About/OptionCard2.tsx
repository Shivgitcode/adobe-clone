import { Option } from "../../constants";

export default function OptionCard2({ el }: { el: Option }) {
    return (
        <div>
            <h3 className="py-[12px] text-[14px] leading-[19.6px] text-[#505050] font-medium px-[32px]">{el.name}</h3>
            <ul>
                {
                    el.moreOptions.map(el => {
                        return <li className=" text-mytext-0 font-normal text-[12px] leading-[27px] px-[32px]">{el}</li>
                    })
                }

            </ul>


        </div>
    )
}
