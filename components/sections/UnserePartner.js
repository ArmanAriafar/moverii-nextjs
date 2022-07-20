const Partners = ["Partner1", "Partner2", "Partner3", "Partner4", "Partner5", "Partner6"];

//? Comp
export default function UnserePartner() {
    return (
        <section className="flexY mt-28">
            <h1 className="font-serif font-bold text-black-800 text-2xl mb-8">Unsere Partner</h1>
            <div className="w-full flexX gap-x-4 mb-14">
                {Partners.map((i, key) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={`/images/${i + ".png"}`} alt={key} key={key} />
                ))}
            </div>
        </section>
    );
}
