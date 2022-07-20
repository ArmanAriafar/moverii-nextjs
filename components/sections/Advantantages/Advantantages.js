//? Data
import { AdvantantagesData } from "../../../data/AdvantantagesData";
import ArrowRight from "../../ui/ArrowRight";

//? Comps
import AdArticle from "./AdvantantagesArticle";

//? Comp
export default function AdvantantagesSection() {
    return (
        <section className="flexY w-full bg-cyan-100 py-10 px-4">
            <h1 className="text-3xl font-bold text-black-800">Advantantages</h1>
            <div className="mx-auto grid w-full max-w-6xl grid-cols-3 grid-rows-[auto_auto_auto] gap-8 py-10">
                {AdvantantagesData.map((a, key) => {
                    return (
                        <AdArticle
                            title={a.title + " " + (key + 1)}
                            subtitle={a.subtitle}
                            icon={a.icon}
                            key={a.id || key}
                        />
                    );
                })}
                <article
                    className="
                    flexXBetween h-fit cursor-pointer overflow-hidden rounded-[1.25rem] bg-orange-500 p-9 text-base
                    font-semibold text-white ring-orange-500 ring-offset-2 duration-200 hover:shadow-xl hover:shadow-orange-500/30 hover:ring-4"
                >
                    Register now
                    <ArrowRight />
                </article>
            </div>
        </section>
    );
}
