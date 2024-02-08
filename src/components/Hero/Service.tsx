import { services } from "../../constants";
import ServiceCard from "./ServiceCard";

export default function Service() {
  return (
    <div>
      {services.map((el) => {
        return <ServiceCard el={el}></ServiceCard>;
      })}
    </div>
  );
}
