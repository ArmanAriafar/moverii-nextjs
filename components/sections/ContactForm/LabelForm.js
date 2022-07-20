export default function FormLabel({ title, icon, subtitle }) {
    return (
        <article className="flexYStart mt-4 w-full px-7">
            <h6 className="font-serif text-base font-normal text-cyan-300">{title}</h6>
            <div className="flexXStart gap-x-2">
                {icon}
                <p className="font-serif text-lg font-medium text-slate-900">{subtitle}</p>
            </div>
        </article>
    );
}
