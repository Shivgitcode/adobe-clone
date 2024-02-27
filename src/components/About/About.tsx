
// import { useContext } from "react";
import OptionCard from "./OptionCard";
// import { AppContext } from "../../context/AppContext";

import { useAppContext } from "../../context/AppContext";
import { options } from "../../constants";
import OptionCard2 from "./OptionCard2";
export default function About() {
    const {
        isHidden
    } = useAppContext();
    return (
        <>
            <div className="my-[20px] bg-[#fafafa] lg:hidden">
                {isHidden.map(el => {
                    return <OptionCard key={el.id} el={el}></OptionCard>
                })}
            </div>

            <div className="hidden lg:flex my-[20px] w-fit mx-auto">
                {
                    options.map(el => {
                        return <OptionCard2 key={el.id} el={el}></OptionCard2>
                    })
                }
            </div>
        </>

    )
}
