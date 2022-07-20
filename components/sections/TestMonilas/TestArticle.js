export default function TestArticle({ text, image, author }) {
    return (
        <article
            className="
            shadow-[0px_4px_25px_rgba(120,123,154,0.15) grid 
            h-[20.625rem] w-[41.25rem] grid-cols-[1fr_1.3fr] items-center justify-items-center overflow-hidden rounded-[1.25rem] bg-white"
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt={author} className="h-full w-full" />
            <div className="h-full w-full py-9 px-5">
                <p className="font-serif text-6xl font-black text-blue-500">{'"'}</p>
                <p className="-mt-4 font-sans text-sm font-normal">{text}</p>
                <h6 className="self-end pt-8 font-serif text-sm font-bold">{author}</h6>
            </div>
        </article>
    );
}
