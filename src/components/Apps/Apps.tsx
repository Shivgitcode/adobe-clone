import { apps } from "../../assets";

export default function App() {
    return (
        <>
            <div className="w-[500px] flex flex-col px-[24px] pt-[32px] pb-[24px] rounded-[20px] h-[500px] myGradient relative">
                <div>
                    <h2 className="text-[20px] leading-[25px] font-medium text-mytext-0 mb-[8px] ">Amazing apps.Endless possibilities.</h2>
                    <p className="my-[8px] text-[18px] leading-[27px] text-mytext-0 font-normal" >Create something beautiful,boost productivity, and deliver engaging experiences with Adobe software.</p>
                    <button className="text-[14px] leading-[21px] text-mytext-0 font-medium hover:underline">View all products</button>
                </div>
                <img src={apps} alt="" height={400} width={400} className="" />
            </div>
        </>
    )
}
