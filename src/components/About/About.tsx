
// import { useContext } from "react";
import OptionCard from "./OptionCard";
// import { AppContext } from "../../context/AppContext";

import { useAppContext } from "../../context/AppContext";
export default function About() {
    const {
        isHidden
    } = useAppContext();
    return (
        <div className="my-[20px] bg-[#fafafa]">
            {isHidden.map(el => {
                return <OptionCard key={el.id} el={el}></OptionCard>
            })}
        </div>
    )
}
