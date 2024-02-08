import { Service } from "../../constants";
type ServiceProp = {
  el: Service;
};

export default function ServiceCard({ el }: ServiceProp) {
  return (
    <div>
      <div>
        <h2>{el.name}</h2>
        <p>{el.desc}</p>
        <button>{el.button}</button>
      </div>
    </div>
  );
}
