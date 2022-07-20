//? Required
import Image from "next/image";

//? ui
import Love from "../ui/Love";
import LogoFooter from "../ui/LogoFooter";
import IG from "../ui/IG";
import FB from "../ui/FB";
import YT from "../ui/YT";

//? Comp
export default function Footer() {
    return (
        <footer className="w-full bg-slate-900 pt-12">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-[2fr_1fr_1fr_1.5fr] items-start justify-items-start gap-x-20 pb-12">
                <div className="grid h-full w-full items-center justify-items-start text-sm font-normal text-white">
                    <div>
                        <p className="flexX mb-1 gap-x-2">
                            Made with <Love /> from
                        </p>
                        <LogoFooter />
                    </div>
                    <p className="mt-6">
                        Wenn du aufgrund von Corona bedingten Umständen deine Reise nicht antreten kannst, hast du die
                        Möglichkeit bis zu 24 Stunden vorher kostenfrei umzubuchen.
                    </p>
                    <div className="mt-9">
                        <p>Folge uns fur mehr storys</p>
                        <div className="flexXStart mt-4 gap-x-4">
                            <IG />
                            <FB />
                            <YT />
                        </div>
                    </div>
                </div>
                <div className="flexYStart text-white">
                    <h6 className="text-lg font-semibold">Moverii</h6>
                    <ul className="mt-2 text-sm font-normal leading-8">
                        <li>
                            <a href="#">Über uns</a>
                        </li>
                        <li>
                            <a href="#">Hilfe</a>
                        </li>
                        <li>
                            <a href="#">Kontakt</a>
                        </li>
                        <li>
                            <a href="#">Partner werden</a>
                        </li>
                        <li>
                            <a href="#">Reisemagazin</a>
                        </li>
                        <li>
                            <a href="#">Nachhaltigkeit</a>
                        </li>
                        <li>
                            <a href="#">Geschenkgutscheine</a>
                        </li>
                        <li>
                            <a href="#">Reiseschutz</a>
                        </li>
                    </ul>
                </div>
                <div className="flexYStart text-white">
                    <h6 className="text-lg font-semibold">Reisen</h6>
                    <ul className="mt-2 text-sm font-normal leading-8">
                        <li>
                            <a href="#">Yoga Retreats</a>
                        </li>
                        <li>
                            <a href="#">Surfcamps</a>
                        </li>
                        <li>
                            <a href="#">Wanderurlaube</a>
                        </li>
                        <li>
                            <a href="#">Fitness-Reisen</a>
                        </li>
                        <li>
                            <a href="#">Kampfsport Camps</a>
                        </li>
                        <li>
                            <a href="#">Aktivreisen</a>
                        </li>
                    </ul>
                </div>
                <div className="grid h-full w-full items-center justify-items-start text-sm font-normal text-white">
                    <h6 className="text-lg font-semibold">Vertrauen</h6>
                    <p>Unsere Kunden bewerten uns mit SEHR GUT</p>
                    <div className="flexXStart gap-x-4">
                        <Image alt="footer1" src="/images/Footer1.png" width="66" height="67" />
                        <Image alt="footer2" src="/images/Footer2.png" width="66" height="48" />
                    </div>
                    <p>Wir legen großen Wert auf Datenschutz und sichere Zahlungsmethoden:</p>
                    <div className="flexXStart gap-x-2">
                        <Image alt="footer3" src="/images/Footer3.png" width="45" height="45" />
                        <Image alt="footer4" src="/images/Footer4.png" width="55" height="39" />
                        <Image alt="footer5" src="/images/Footer5.png" width="55" height="39" />
                        <Image alt="footer6" src="/images/Footer6.png" width="55" height="39" />
                    </div>
                </div>
            </div>
            <p className="mx-auto max-w-6xl border-t border-white py-4 text-center text-sm font-normal text-white opacity-40">
                2022 moverii. Alle Rechte vorbehalten.
            </p>
        </footer>
    );
}
