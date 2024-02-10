import { Service } from "../../constants";
type ServiceProp = {
  el: Service;
};

export default function ServiceCard({ el }: ServiceProp) {
  return (
    <div className="px-[24px] pt-[32px] pb-[24px] bg-white/80 mb-[50px] rounded-[20px]">
      <div>
        <h2 className="text-[20px] leading-[25px] font-medium text-mytext-0 mb-[8px] ">{el.name}</h2>
        <p className="my-[8px] text-[18px] leading-[27px] text-mytext-0 font-normal" >{el.desc}</p>
        <button className="px-[18px] pt-[7px] pb-[8px] text-mytext-0 leading-[20px] text-[17px] font-semibold border-[2px] rounded-[20px] border-black hover:bg-black hover:text-white">{el.button}</button>
        <div>
          {/* <img src={el.image} alt="" /> */}
        </div>
      </div>
    </div>
  );
}
