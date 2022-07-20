//? Required
import { useState } from "react";

//? ui
import ArrowButtom from "../../ui/ArrowButtom";

//? Comp
export default function AdArticle({ title, subtitle, icon }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <article
            className="h-fit cursor-pointer overflow-hidden rounded-[1.25rem] bg-white p-6 shadow-AdArticle hover:shadow-none duration-200"
            onClick={() => setIsActive((prev) => !prev)}
        >
            <header className="flexXBetween">
                <div className="flexX gap-x-2">
                    {icon}
                    <h6 className="text-base font-semibold text-black-800">{title}</h6>
                </div>
                <ArrowButtom isActive={isActive} />
            </header>
            {isActive && <p>{subtitle}</p>}
        </article>
    );
}
