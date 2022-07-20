//? Required
import Link from "next/link";

//? Components
import Logo from "../ui/Logo";

//? Icons
import FavoritenIcon from "../ui/icons/FavoritenIcon";
import HilfeIcon from "../ui/icons/HilfeIcon";
import SucheIcon from "../ui/icons/SucheIcon";
import UserIcon from "../ui/icons/UserIcon";
//? Comp
export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-[200] px-4">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between py-7">
                <Logo />
                <div className="flex w-2/3 items-center justify-between">
                    <select name="langs" id="langs">
                        <option value="dutch">Dutch</option>
                        <option value="english">English</option>
                    </select>
                    <Link href="/favoriten">
                        <a className="disFlex hoverEfx gap-x-1">
                            <FavoritenIcon />
                            Favoriten
                        </a>
                    </Link>
                    <Link href="/hilfe">
                        <a className="disFlex hoverEfx gap-x-1">
                            <HilfeIcon /> Hilfe
                        </a>
                    </Link>
                    <Link href="/suche">
                        <a className="disFlex hoverEfx gap-x-1">
                            <SucheIcon />
                            Suche
                        </a>
                    </Link>
                    <Link href="/anmelden">
                        <a className="disFlex hoverEfx gap-x-1">
                            <UserIcon />
                            Anmelden
                        </a>
                    </Link>
                    <Link href="/registrieren">
                        <a className="btn-primary">Registrieren</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
