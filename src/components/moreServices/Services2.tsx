import { services2 } from "../../constants"

export default function Services2() {
    return (
        <div>
            <div className="px-[24px] pt-[32px] pb-[24px] mb-[50px] rounded-[20px] h-[500px] serviceImg ">
                <div>
                    <h2 className="text-[20px] leading-[25px] font-medium text-mytext-0 mb-[8px] ">{services2[0].name}</h2>
                    <p className="my-[8px] text-[18px] leading-[27px] text-mytext-0 font-normal" >{services2[0].desc}</p>
                    <button className="text-[14px] leading-[21px] text-mytext-0 font-medium hover:underline">{services2[0].button}</button>
                    {/* <div className="w-full flex justify-center">
                    <img src={services2[0].image} alt="" className="max-h-[300px] w-[500px] object-cover object-bottom" />
                </div> */}
                </div>
            </div>

            <div className="px-[24px] pt-[32px] pb-[24px] mb-[50px] rounded-[20px] h-[500px] serviceImg2 bg-[#EB1000] ">
                <div>
                    <h2 className="text-[20px] leading-[25px] font-medium text-white mb-[8px] ">{services2[1].name}</h2>
                    <p className="my-[8px] text-[18px] leading-[27px] text-white font-normal" >{services2[1].desc}</p>
                    <button className="text-[14px] leading-[21px] text-white font-medium hover:underline">{services2[1].button}</button>
                    {/* <div className="w-full flex justify-center">
                    <img src={services2[0].image} alt="" className="max-h-[300px] w-[500px] object-cover object-bottom" />
                </div> */}
                </div>
            </div>

        </div>

    )
}