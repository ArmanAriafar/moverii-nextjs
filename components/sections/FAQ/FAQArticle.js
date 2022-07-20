//? Required
import { useState } from "react";

//? ui
import ArrowTop from "../../ui/ArrowTop";

//? Comp
export default function FAQArticle({ title, subtitle }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <article
            className="w-full rounded-[1.25rem] bg-cyan-100 p-5 font-serif text-sm font-bold"
            onClick={() => setIsActive((prev) => !prev)}
        >
            <div className="flexXBetween">
                <h1>{title}</h1>
                <ArrowTop isActive={isActive}/>
            </div>
            {isActive && <p className="font-normal mt-3">{subtitle}</p>}
        </article>
    );
}
