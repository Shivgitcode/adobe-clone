// import { background } from "../../assets";
import Service from "./Service";

export default function Hero() {
  return (
    <div className='myBackground'>

      <div className="p-[40px] pt-[150px] lg:w-[56.3%] mx-auto">

        <div className="lg:flex flex-col justify-center items-center">
          <p className="text-[36px] leading-[45px] mb-[10px] font-medium text-[#2c2c2c]">
            Do it all with Adobe Creative Cloud.
          </p>
          <div className="flex flex-col items-start my-[24px] gap-[24px] lg:items-center md:flex-row md:order-3">
            <button className="px-[24px] pt-[10px] pb-[10px] flex-1 hover:bg-[#0d66d0] w-full font-medium text-[19px] leading-[24px] text-center bg-[#1473e6] text-white rounded-[25px]">
              Free trial
            </button>
            <p className="text-[18px] underline leading-[27px] text-[#2c2c2c] ">
              See all plans
            </p>
          </div>
          <p className="text-[18px] leading-[27px] font-medium my-[8px] text-mytext-0 lg:text-center ">
            Make anything you can imagine , from gorgeous images,graphics, and
            art to standout social posts , videos , PDF's and more . Get 20+
            apps in the All Apps plan plus generative AI tools powered by Adobe
            Firefly
          </p>
        </div>

      </div>
      <Service></Service>


      {/* service seciton*/}
    </div>
  );
}
