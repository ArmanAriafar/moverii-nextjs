//? Icons
import Checked from "../ui/icons/Checked";

const liArray = [
    { icon: <Checked />, text: "... deinen Urlaub aktiv erleben willst" },
    { icon: <Checked />, text: "... die Natur entdecken und bewusst reisen willst" },
    { icon: <Checked />, text: "... lokale Anbieter unterstützen willst" },
    { icon: <Checked />, text: "... offen für neue Menschen und Kulturen bist" },
    { icon: <Checked />, text: "... dir keine Sorgen um die Qualität oder Organisation machen willst" },
];

//? Comp
export default function Holiday() {
    return (
        <section className="disFlex mt-28 w-full">
            <div className="grid w-full max-w-6xl grid-cols-2 items-center justify-items-center gap-x-12">
                <div className="disFlex relative h-full w-full">
                    <div className="absolute top-1/2 -z-10 h-[75%] w-full -translate-y-1/2 rounded-[1.25rem] bg-orange-500" />
                    <div className="z-20 h-full w-[90%] -scale-x-100 rounded-[3.125rem] bg-holidayImage bg-cover bg-center" />
                </div>
                <div className="flexY w-full items-start py-[6.28rem] text-black-800">
                    <h1 className="mb-7 text-2xl font-bold">
                        Ein Urlaub mit moverii passt zu dir,
                        <br /> wenn du…
                    </h1>
                    <ul>
                        {liArray.map((i, key) => (
                            <li key={key} className="flexXStart gap-x-3 text-sm font-normal leading-7">
                                {i.icon}
                                {i.text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
