//? Required
import Head from "next/head";

//? Comps
import Header from "../components/sections/Header";
import MissionSection from "../components/sections/OurMission";
import AdvantantagesSection from "../components/sections/Advantantages/Advantantages";
import Holiday from "../components/sections/Holiday";
import ContactForm from "../components/sections/ContactForm/ContactForm";
import UnserePartner from "../components/sections/UnserePartner";
import FrequentlyQuestions from "../components/sections/FAQ/FrequentlyQuestions";
import Testmonials from "../components/sections/TestMonilas/TestMonials";

//? Comp
export default function HomePage() {
    return (
        <>
            <Head>
                <title>Moverii</title>
            </Head>
            <Header />
            <MissionSection />
            <AdvantantagesSection />
            <Holiday />
            <Testmonials />
            <FrequentlyQuestions />
            <ContactForm />
            <UnserePartner />
        </>
    );
}
