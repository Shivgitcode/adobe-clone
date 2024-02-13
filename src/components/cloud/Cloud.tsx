export default function Cloud() {
    return (
        <div className="rounded-[20px] bg-[#ededed] mb-[32px]">
            <div className="px-[24px] pt-[32px] pb-[24px] myGradient2 rounded-tr-[16px] rounded-tl-[16px] flex flex-col gap-[8px]">
                <h2 className="text-[20px] leading-[25px] text-white font-medium">Creative Cloud</h2>
                <p className="text-[14px] leading-[21px] text-white font-normal">Creative Cloud for business</p>
                <p className="text-[14px] leading-[21px] text-white font-normal">Creative Cloud for business</p>
                <p className="text-[14px] leading-[21px] text-white font-normal">Student Pricing-save over 60%
                </p>

            </div>


            <div className="flex flex-col items-start p-[24px] gap-[16px] pb-[70px]">
                <div className="flex flex-col items-start gap-[8px]">
                    <h2 className="text-[20px] leading-[25px] text-mytext-0 font-semibold">Acrobat</h2>
                    <p className="text-[14px] leading-[21px] text-mytext-0 font-medium">Acrobat free trial</p>
                    <p className="text-[14px] leading-[21px] text-mytext-0 font-medium">Online PDF tools</p>

                </div>
                <div className="flex flex-col items-star gap-[8px]">
                    <h2 className="text-[20px] leading-[25px] text-mytext-0 font-semibold">Explore</h2>
                    <p className="text-[14px] leading-[21px] text-mytext-0 font-medium">View all products</p>
                    <p className="text-[14px] leading-[21px] text-mytext-0 font-medium">See all plans and pricing</p>



                </div>

            </div>
        </div>
    )
}