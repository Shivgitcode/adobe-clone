import { services } from "../../constants";
import ServiceCard from "./ServiceCard";
import {
  ps
} from "../../assets/index"

export default function Service() {
  return (
    <div className="p-[2rem] pb-[1rem] lg:p-[5rem] lg:pb-0 md:flex md:gap-2">
      {services.map((el) => {
        return <ServiceCard el={el}></ServiceCard>;
      })}
    </div>
  );
}
