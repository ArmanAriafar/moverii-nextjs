//? Comps
import SliderTestmonials from "./SliderTestMonials";

//? Comp
export default function Testmonials() {
    return (
        <section className="disFlex mt-32 w-full bg-amber-100 py-16">
            <div className="flexY mx-auto w-full max-w-7xl">
                <h1 className="font-sans text-4xl font-bold text-black-900">Testmonials</h1>
                <SliderTestmonials />
            </div>
        </section>
    );
}
