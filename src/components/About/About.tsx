
import { useContext } from "react";
import OptionCard from "./OptionCard";
import { AppContext } from "../../context/AppContext";
export default function About() {
    const { isHidden } = useContext(AppContext)
    return (
        <div className="my-[20px] bg-[#fafafa]">
            {isHidden.map(el => {
                return <OptionCard el={el}></OptionCard>
            })}
        </div>
    )
}
