//? Required
import FAQ from "../../../data/FAQ";
import FAQArticle from "./FAQArticle";

//? ui
import PaperPlan from "../../ui/PaperPlan";
import PaperPlanTwo from "../../ui/PaperPlanTwo";

//? Comp
export default function FrequentlyQuestions() {
    return (
        <section className="w-full">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_3fr_1fr]">
                <PaperPlanTwo />
                <div className="w-full">
                    <h1 className="text-center font-serif text-[2rem] font-bold">Häufig gestellte Fragen</h1>
                    <div className="flexY mt-11 w-full max-w-4xl gap-y-4">
                        {FAQ.map((i) => (
                            <FAQArticle title={i.title} subtitle={i.subtitle} key={i.id} />
                        ))}
                    </div>
                </div>
                <PaperPlan />
            </div>
        </section>
    );
}
