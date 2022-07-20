//? ui
import ArrowRight from "../ui/ArrowRight";

//? Comp
export default function Header() {
    return (
        <header className="mt-24 h-[26rem] w-full bg-providerHeader bg-cover bg-center">
            <div className="disFlex h-full w-full bg-slate-900/40">
                <div className="disFlex flex-col">
                    <h1 className="text-4xl font-extrabold text-white">Get started</h1>
                    <p className="mt-2 text-xl font-semibold text-white">
                        Surfen <span className="text-orange-500">•</span> Yoga{" "}
                        <span className="text-orange-500">•</span> Wandern <span className="text-orange-500">•</span>{" "}
                        Fitness <span className="text-orange-500">•</span> Kampfsport.
                    </p>
                    <p className="mt-9 max-w-lg text-center text-sm font-normal text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi
                    </p>
                    <button className="btn-secondary flexX mt-9 gap-x-1 duration-200 hover:gap-x-3">
                        Let{"’"}s Go <ArrowRight />
                    </button>
                </div>
            </div>
        </header>
    );
}
