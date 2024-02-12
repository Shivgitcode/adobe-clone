import React from 'react'

export default function App() {
    return (
        <div className="p-[24px] ">
            <div className="px-[24px] pt-[32px] pb-[24px] mb-[50px] rounded-[20px] h-[500px] serviceImg ">
                <div>
                    <h2 className="text-[20px] leading-[25px] font-medium text-mytext-0 mb-[8px] ">Amazing apps.Endless possibilities.</h2>
                    <p className="my-[8px] text-[18px] leading-[27px] text-mytext-0 font-normal" >Create something beautiful,boost productivity, and deliver engaging experiences with Adobe software.</p>
                    <button className="text-[14px] leading-[21px] text-mytext-0 font-medium hover:underline">View all products</button>
                    {/* <div className="w-full flex justify-center">
                    <img src={services2[0].image} alt="" className="max-h-[300px] w-[500px] object-cover object-bottom" />
                </div> */}
                </div>
            </div>
        </div>
    )
}
